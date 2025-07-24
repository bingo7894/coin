import * as os$1 from 'os';
import * as tty from 'tty';
import * as fs$1 from 'fs';
import * as path from 'path';
import * as child_process from 'child_process';
import * as promises from 'fs/promises';
import * as util from 'util';
import * as async_hooks from 'async_hooks';
import * as events from 'events';

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var prisma = {};

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(os$1);

const require$$1$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(tty);

const require$$2 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(fs$1);

const require$$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(path);

const require$$4 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(child_process);

const require$$5 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(promises);

const require$$6 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(util);

const require$$7 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(async_hooks);

const require$$8 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(events);

var _a2, _b, _c2;
var Yl = Object.create;
var Lr = Object.defineProperty;
var Zl = Object.getOwnPropertyDescriptor;
var Xl = Object.getOwnPropertyNames;
var eu = Object.getPrototypeOf, tu = Object.prototype.hasOwnProperty;
var Z = (e10, t) => () => (t || e10((t = { exports: {} }).exports, t), t.exports), Vt = (e10, t) => {
  for (var r in t) Lr(e10, r, { get: t[r], enumerable: true });
}, fo = (e10, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function") for (let i of Xl(t)) !tu.call(e10, i) && i !== r && Lr(e10, i, { get: () => t[i], enumerable: !(n = Zl(t, i)) || n.enumerable });
  return e10;
};
var k = (e10, t, r) => (r = e10 != null ? Yl(eu(e10)) : {}, fo(!e10 || !e10.__esModule ? Lr(r, "default", { value: e10, enumerable: true }) : r, e10)), ru = (e10) => fo(Lr({}, "__esModule", { value: true }), e10);
var $o = Z((lf, Yn) => {
  var v = Yn.exports;
  Yn.exports.default = v;
  var D = "\x1B[", Jt = "\x1B]", ft = "\x07", Qr = ";", Mo = process.env.TERM_PROGRAM === "Apple_Terminal";
  v.cursorTo = (e10, t) => {
    if (typeof e10 != "number") throw new TypeError("The `x` argument is required");
    return typeof t != "number" ? D + (e10 + 1) + "G" : D + (t + 1) + ";" + (e10 + 1) + "H";
  };
  v.cursorMove = (e10, t) => {
    if (typeof e10 != "number") throw new TypeError("The `x` argument is required");
    let r = "";
    return e10 < 0 ? r += D + -e10 + "D" : e10 > 0 && (r += D + e10 + "C"), t < 0 ? r += D + -t + "A" : t > 0 && (r += D + t + "B"), r;
  };
  v.cursorUp = (e10 = 1) => D + e10 + "A";
  v.cursorDown = (e10 = 1) => D + e10 + "B";
  v.cursorForward = (e10 = 1) => D + e10 + "C";
  v.cursorBackward = (e10 = 1) => D + e10 + "D";
  v.cursorLeft = D + "G";
  v.cursorSavePosition = Mo ? "\x1B7" : D + "s";
  v.cursorRestorePosition = Mo ? "\x1B8" : D + "u";
  v.cursorGetPosition = D + "6n";
  v.cursorNextLine = D + "E";
  v.cursorPrevLine = D + "F";
  v.cursorHide = D + "?25l";
  v.cursorShow = D + "?25h";
  v.eraseLines = (e10) => {
    let t = "";
    for (let r = 0; r < e10; r++) t += v.eraseLine + (r < e10 - 1 ? v.cursorUp() : "");
    return e10 && (t += v.cursorLeft), t;
  };
  v.eraseEndLine = D + "K";
  v.eraseStartLine = D + "1K";
  v.eraseLine = D + "2K";
  v.eraseDown = D + "J";
  v.eraseUp = D + "1J";
  v.eraseScreen = D + "2J";
  v.scrollUp = D + "S";
  v.scrollDown = D + "T";
  v.clearScreen = "\x1Bc";
  v.clearTerminal = process.platform === "win32" ? `${v.eraseScreen}${D}0f` : `${v.eraseScreen}${D}3J${D}H`;
  v.beep = ft;
  v.link = (e10, t) => [Jt, "8", Qr, Qr, t, ft, e10, Jt, "8", Qr, Qr, ft].join("");
  v.image = (e10, t = {}) => {
    let r = `${Jt}1337;File=inline=1`;
    return t.width && (r += `;width=${t.width}`), t.height && (r += `;height=${t.height}`), t.preserveAspectRatio === false && (r += ";preserveAspectRatio=0"), r + ":" + e10.toString("base64") + ft;
  };
  v.iTerm = { setCwd: (e10 = process.cwd()) => `${Jt}50;CurrentDir=${e10}${ft}`, annotation: (e10, t = {}) => {
    let r = `${Jt}1337;`, n = typeof t.x < "u", i = typeof t.y < "u";
    if ((n || i) && !(n && i && typeof t.length < "u")) throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
    return e10 = e10.replace(/\|/g, ""), r += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t.length > 0 ? r += (n ? [e10, t.length, t.x, t.y] : [t.length, e10]).join("|") : r += e10, r + ft;
  } };
});
var Zn = Z((uf, qo) => {
  qo.exports = (e10, t = process.argv) => {
    let r = e10.startsWith("-") ? "" : e10.length === 1 ? "-" : "--", n = t.indexOf(r + e10), i = t.indexOf("--");
    return n !== -1 && (i === -1 || n < i);
  };
});
var Bo = Z((cf, Vo) => {
  var Vu = require$$0, jo = require$$1$1, de = Zn(), { env: Q } = process, Qe;
  de("no-color") || de("no-colors") || de("color=false") || de("color=never") ? Qe = 0 : (de("color") || de("colors") || de("color=true") || de("color=always")) && (Qe = 1);
  "FORCE_COLOR" in Q && (Q.FORCE_COLOR === "true" ? Qe = 1 : Q.FORCE_COLOR === "false" ? Qe = 0 : Qe = Q.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(Q.FORCE_COLOR, 10), 3));
  function Xn(e10) {
    return e10 === 0 ? false : { level: e10, hasBasic: true, has256: e10 >= 2, has16m: e10 >= 3 };
  }
  function ei(e10, t) {
    if (Qe === 0) return 0;
    if (de("color=16m") || de("color=full") || de("color=truecolor")) return 3;
    if (de("color=256")) return 2;
    if (e10 && !t && Qe === void 0) return 0;
    let r = Qe || 0;
    if (Q.TERM === "dumb") return r;
    if (process.platform === "win32") {
      let n = Vu.release().split(".");
      return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
    }
    if ("CI" in Q) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => n in Q) || Q.CI_NAME === "codeship" ? 1 : r;
    if ("TEAMCITY_VERSION" in Q) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Q.TEAMCITY_VERSION) ? 1 : 0;
    if (Q.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in Q) {
      let n = parseInt((Q.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (Q.TERM_PROGRAM) {
        case "iTerm.app":
          return n >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    return /-256(color)?$/i.test(Q.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Q.TERM) || "COLORTERM" in Q ? 1 : r;
  }
  function Bu(e10) {
    let t = ei(e10, e10 && e10.isTTY);
    return Xn(t);
  }
  Vo.exports = { supportsColor: Bu, stdout: Xn(ei(true, jo.isatty(1))), stderr: Xn(ei(true, jo.isatty(2))) };
});
var Qo = Z((pf, Go) => {
  var Uu = Bo(), gt = Zn();
  function Uo(e10) {
    if (/^\d{3,4}$/.test(e10)) {
      let r = /(\d{1,2})(\d{2})/.exec(e10);
      return { major: 0, minor: parseInt(r[1], 10), patch: parseInt(r[2], 10) };
    }
    let t = (e10 || "").split(".").map((r) => parseInt(r, 10));
    return { major: t[0], minor: t[1], patch: t[2] };
  }
  function ti(e10) {
    let { env: t } = process;
    if ("FORCE_HYPERLINK" in t) return !(t.FORCE_HYPERLINK.length > 0 && parseInt(t.FORCE_HYPERLINK, 10) === 0);
    if (gt("no-hyperlink") || gt("no-hyperlinks") || gt("hyperlink=false") || gt("hyperlink=never")) return false;
    if (gt("hyperlink=true") || gt("hyperlink=always") || "NETLIFY" in t) return true;
    if (!Uu.supportsColor(e10) || e10 && !e10.isTTY || process.platform === "win32" || "CI" in t || "TEAMCITY_VERSION" in t) return false;
    if ("TERM_PROGRAM" in t) {
      let r = Uo(t.TERM_PROGRAM_VERSION);
      switch (t.TERM_PROGRAM) {
        case "iTerm.app":
          return r.major === 3 ? r.minor >= 1 : r.major > 3;
        case "WezTerm":
          return r.major >= 20200620;
        case "vscode":
          return r.major > 1 || r.major === 1 && r.minor >= 72;
      }
    }
    if ("VTE_VERSION" in t) {
      if (t.VTE_VERSION === "0.50.0") return false;
      let r = Uo(t.VTE_VERSION);
      return r.major > 0 || r.minor >= 50;
    }
    return false;
  }
  Go.exports = { supportsHyperlink: ti, stdout: ti(process.stdout), stderr: ti(process.stderr) };
});
var Wo = Z((df, Wt) => {
  var Gu = $o(), ri = Qo(), Jo = (e10, t, { target: r = "stdout", ...n } = {}) => ri[r] ? Gu.link(e10, t) : n.fallback === false ? e10 : typeof n.fallback == "function" ? n.fallback(e10, t) : `${e10} (\u200B${t}\u200B)`;
  Wt.exports = (e10, t, r = {}) => Jo(e10, t, r);
  Wt.exports.stderr = (e10, t, r = {}) => Jo(e10, t, { target: "stderr", ...r });
  Wt.exports.isSupported = ri.stdout;
  Wt.exports.stderr.isSupported = ri.stderr;
});
var ii = Z((Pf, Qu) => {
  Qu.exports = { name: "@prisma/engines-version", version: "5.20.0-12.06fc58a368dc7be9fbbbe894adf8d445d208c284", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "06fc58a368dc7be9fbbbe894adf8d445d208c284" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.34", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
});
var oi = Z((Jr) => {
  Object.defineProperty(Jr, "__esModule", { value: true });
  Jr.enginesVersion = void 0;
  Jr.enginesVersion = ii().prisma.enginesVersion;
});
var Yo = Z((Vf, Hu) => {
  Hu.exports = { name: "dotenv", version: "16.0.3", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { require: "./lib/main.js", types: "./lib/main.d.ts", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", "lint-readme": "standard-markdown", pretest: "npm run lint && npm run dts-check", test: "tap tests/*.js --100 -Rspec", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^17.0.9", decache: "^4.6.1", dtslint: "^3.7.0", sinon: "^12.0.1", standard: "^16.0.4", "standard-markdown": "^7.1.0", "standard-version": "^9.3.2", tap: "^15.1.6", tar: "^6.1.11", typescript: "^4.5.4" }, engines: { node: ">=12" } };
});
var Xo = Z((Bf, Hr) => {
  var Ku = require$$2, Zo = require$$1, zu = require$$0, Yu = Yo(), Zu = Yu.version, Xu = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
  function ec(e10) {
    let t = {}, r = e10.toString();
    r = r.replace(/\r\n?/mg, `
`);
    let n;
    for (; (n = Xu.exec(r)) != null; ) {
      let i = n[1], o = n[2] || "";
      o = o.trim();
      let s = o[0];
      o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), t[i] = o;
    }
    return t;
  }
  function ui(e10) {
    console.log(`[dotenv@${Zu}][DEBUG] ${e10}`);
  }
  function tc(e10) {
    return e10[0] === "~" ? Zo.join(zu.homedir(), e10.slice(1)) : e10;
  }
  function rc(e10) {
    let t = Zo.resolve(process.cwd(), ".env"), r = "utf8", n = !!(e10 && e10.debug), i = !!(e10 && e10.override);
    e10 && (e10.path != null && (t = tc(e10.path)), e10.encoding != null && (r = e10.encoding));
    try {
      let o = Wr.parse(Ku.readFileSync(t, { encoding: r }));
      return Object.keys(o).forEach(function(s) {
        Object.prototype.hasOwnProperty.call(process.env, s) ? (i === true && (process.env[s] = o[s]), n && ui(i === true ? `"${s}" is already defined in \`process.env\` and WAS overwritten` : `"${s}" is already defined in \`process.env\` and was NOT overwritten`)) : process.env[s] = o[s];
      }), { parsed: o };
    } catch (o) {
      return n && ui(`Failed to load ${t} ${o.message}`), { error: o };
    }
  }
  var Wr = { config: rc, parse: ec };
  Hr.exports.config = Wr.config;
  Hr.exports.parse = Wr.parse;
  Hr.exports = Wr;
});
var os = Z((Kf, is) => {
  is.exports = (e10) => {
    let t = e10.match(/^[ \t]*(?=\S)/gm);
    return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
  };
});
var as = Z((zf, ss) => {
  var sc = os();
  ss.exports = (e10) => {
    let t = sc(e10);
    if (t === 0) return e10;
    let r = new RegExp(`^[ \\t]{${t}}`, "gm");
    return e10.replace(r, "");
  };
});
var mi = Z((rg, ls) => {
  ls.exports = (e10, t = 1, r) => {
    if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e10 != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e10}\``);
    if (typeof t != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
    if (typeof r.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
    if (t === 0) return e10;
    let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e10.replace(n, r.indent.repeat(t));
  };
});
var ds = Z((og, ps) => {
  ps.exports = ({ onlyFirst: e10 = false } = {}) => {
    let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
    return new RegExp(t, e10 ? void 0 : "g");
  };
});
var yi = Z((sg, ms) => {
  var fc = ds();
  ms.exports = (e10) => typeof e10 == "string" ? e10.replace(fc(), "") : e10;
});
var fs = Z((ug, Yr) => {
  Yr.exports = (e10 = {}) => {
    let t;
    if (e10.repoUrl) t = e10.repoUrl;
    else if (e10.user && e10.repo) t = `https://github.com/${e10.user}/${e10.repo}`;
    else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
    let r = new URL(`${t}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
    for (let i of n) {
      let o = e10[i];
      if (o !== void 0) {
        if (i === "labels" || i === "projects") {
          if (!Array.isArray(o)) throw new TypeError(`The \`${i}\` option should be an array`);
          o = o.join(",");
        }
        r.searchParams.set(i, o);
      }
    }
    return r.toString();
  };
  Yr.exports.default = Yr.exports;
});
var io = Z((lv, Xa) => {
  Xa.exports = /* @__PURE__ */ function() {
    function e10(t, r, n, i, o) {
      return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
    }
    return function(t, r) {
      if (t === r) return 0;
      if (t.length > r.length) {
        var n = t;
        t = r, r = n;
      }
      for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); ) i--, o--;
      for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
      if (i -= s, o -= s, i === 0 || o < 3) return o;
      var a = 0, l, u, c, p, d, f, g, h, O, T, S, C, E = [];
      for (l = 0; l < i; l++) E.push(l + 1), E.push(t.charCodeAt(s + l));
      for (var me = E.length - 1; a < o - 3; ) for (O = r.charCodeAt(s + (u = a)), T = r.charCodeAt(s + (c = a + 1)), S = r.charCodeAt(s + (p = a + 2)), C = r.charCodeAt(s + (d = a + 3)), f = a += 4, l = 0; l < me; l += 2) g = E[l], h = E[l + 1], u = e10(g, u, c, O, h), c = e10(u, c, p, T, h), p = e10(c, p, d, S, h), f = e10(p, d, f, C, h), E[l] = f, d = p, p = c, c = u, u = g;
      for (; a < o; ) for (O = r.charCodeAt(s + (u = a)), f = ++a, l = 0; l < me; l += 2) g = E[l], E[l] = f = e10(g, u, f, O, E[l + 1]), u = g;
      return f;
    };
  }();
});
var _m = {};
Vt(_m, { Debug: () => Un, Decimal: () => Re, Extensions: () => qn, MetricsClient: () => bt, NotFoundError: () => Le, PrismaClientInitializationError: () => R, PrismaClientKnownRequestError: () => V, PrismaClientRustPanicError: () => le, PrismaClientUnknownRequestError: () => B, PrismaClientValidationError: () => J, Public: () => jn, Sql: () => ie, defineDmmfProperty: () => hs, empty: () => ws, getPrismaClient: () => Hl, getRuntime: () => Tn, join: () => Es, makeStrictEnum: () => Kl, makeTypedQueryFactory: () => bs, objectEnumValues: () => en, raw: () => Ai, skip: () => tn, sqltag: () => Ii, warnEnvConflicts: () => zl, warnOnce: () => Xt });
var library = ru(_m);
var qn = {};
Vt(qn, { defineExtension: () => go, getExtensionContext: () => ho });
function go(e10) {
  return typeof e10 == "function" ? e10 : (t) => t.$extends(e10);
}
function ho(e10) {
  return e10;
}
var jn = {};
Vt(jn, { validator: () => yo });
function yo(...e10) {
  return (t) => t;
}
var Nr = {};
Vt(Nr, { $: () => Po, bgBlack: () => du, bgBlue: () => hu, bgCyan: () => bu, bgGreen: () => fu, bgMagenta: () => yu, bgRed: () => mu, bgWhite: () => Eu, bgYellow: () => gu, black: () => lu, blue: () => rt, bold: () => H, cyan: () => De, dim: () => Oe, gray: () => Bt, green: () => qe, grey: () => pu, hidden: () => su, inverse: () => ou, italic: () => iu, magenta: () => uu, red: () => ce, reset: () => nu, strikethrough: () => au, underline: () => X, white: () => cu, yellow: () => ke });
var Vn, bo, Eo, wo, xo = true;
typeof process < "u" && ({ FORCE_COLOR: Vn, NODE_DISABLE_COLORS: bo, NO_COLOR: Eo, TERM: wo } = process.env || {}, xo = process.stdout && process.stdout.isTTY);
var Po = { enabled: !bo && Eo == null && wo !== "dumb" && (Vn != null && Vn !== "0" || xo) };
function M(e10, t) {
  let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e10}m`, i = `\x1B[${t}m`;
  return function(o) {
    return !Po.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
  };
}
var nu = M(0, 0), H = M(1, 22), Oe = M(2, 22), iu = M(3, 23), X = M(4, 24), ou = M(7, 27), su = M(8, 28), au = M(9, 29), lu = M(30, 39), ce = M(31, 39), qe = M(32, 39), ke = M(33, 39), rt = M(34, 39), uu = M(35, 39), De = M(36, 39), cu = M(37, 39), Bt = M(90, 39), pu = M(90, 39), du = M(40, 49), mu = M(41, 49), fu = M(42, 49), gu = M(43, 49), hu = M(44, 49), yu = M(45, 49), bu = M(46, 49), Eu = M(47, 49);
var wu = 100, vo = ["green", "yellow", "blue", "magenta", "cyan", "red"], Ut = [], To = Date.now(), xu = 0, Bn = typeof process < "u" ? process.env : {};
(_b = globalThis.DEBUG) != null ? _b : globalThis.DEBUG = (_a2 = Bn.DEBUG) != null ? _a2 : "";
(_c2 = globalThis.DEBUG_COLORS) != null ? _c2 : globalThis.DEBUG_COLORS = Bn.DEBUG_COLORS ? Bn.DEBUG_COLORS === "true" : true;
var Gt = { enable(e10) {
  typeof e10 == "string" && (globalThis.DEBUG = e10);
}, disable() {
  let e10 = globalThis.DEBUG;
  return globalThis.DEBUG = "", e10;
}, enabled(e10) {
  let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? false : e10.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? false : e10.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
  return r && !n;
}, log: (...e10) => {
  var _a3;
  let [t, r, ...n] = e10;
  ((_a3 = console.warn) != null ? _a3 : console.log)(`${t} ${r}`, ...n);
}, formatters: {} };
function Pu(e10) {
  let t = { color: vo[xu++ % vo.length], enabled: Gt.enabled(e10), namespace: e10, log: Gt.log, extend: () => {
  } }, r = (...n) => {
    let { enabled: i, namespace: o, color: s, log: a } = t;
    if (n.length !== 0 && Ut.push([o, ...n]), Ut.length > wu && Ut.shift(), Gt.enabled(o) || i) {
      let l = n.map((c) => typeof c == "string" ? c : vu(c)), u = `+${Date.now() - To}ms`;
      To = Date.now(), globalThis.DEBUG_COLORS ? a(Nr[s](H(o)), ...l, Nr[s](u)) : a(o, ...l, u);
    }
  };
  return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => t[i] = o });
}
var Un = new Proxy(Pu, { get: (e10, t) => Gt[t], set: (e10, t, r) => Gt[t] = r });
function vu(e10, t = 2) {
  let r = /* @__PURE__ */ new Set();
  return JSON.stringify(e10, (n, i) => {
    if (typeof i == "object" && i !== null) {
      if (r.has(i)) return "[Circular *]";
      r.add(i);
    } else if (typeof i == "bigint") return i.toString();
    return i;
  }, t);
}
function Ro(e10 = 7500) {
  let t = Ut.map(([r, ...n]) => `${r} ${n.map((i) => typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
  return t.length < e10 ? t : t.slice(-e10);
}
function Co() {
  Ut.length = 0;
}
var L = Un;
var So = k(require$$2);
function Gn() {
  let e10 = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
  if (!(e10 && So.default.existsSync(e10)) && process.arch === "ia32") throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
}
var Qn = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "freebsd15", "openbsd", "netbsd", "arm"];
var Mr = "libquery_engine";
function $r(e10, t) {
  return e10.includes("windows") ? `query_engine-${e10}.dll.node` : e10.includes("darwin") ? `${Mr}-${e10}.dylib.node` : `${Mr}-${e10}.so.node`;
}
var ko = k(require$$4), Kn = k(require$$5), Ur = k(require$$0);
var _e = Symbol.for("@ts-pattern/matcher"), Tu = Symbol.for("@ts-pattern/isVariadic"), jr = "@ts-pattern/anonymous-select-key", Jn = (e10) => !!(e10 && typeof e10 == "object"), qr = (e10) => e10 && !!e10[_e], we = (e10, t, r) => {
  if (qr(e10)) {
    let n = e10[_e](), { matched: i, selections: o } = n.match(t);
    return i && o && Object.keys(o).forEach((s) => r(s, o[s])), i;
  }
  if (Jn(e10)) {
    if (!Jn(t)) return false;
    if (Array.isArray(e10)) {
      if (!Array.isArray(t)) return false;
      let n = [], i = [], o = [];
      for (let s of e10.keys()) {
        let a = e10[s];
        qr(a) && a[Tu] ? o.push(a) : o.length ? i.push(a) : n.push(a);
      }
      if (o.length) {
        if (o.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (t.length < n.length + i.length) return false;
        let s = t.slice(0, n.length), a = i.length === 0 ? [] : t.slice(-i.length), l = t.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
        return n.every((u, c) => we(u, s[c], r)) && i.every((u, c) => we(u, a[c], r)) && (o.length === 0 || we(o[0], l, r));
      }
      return e10.length === t.length && e10.every((s, a) => we(s, t[a], r));
    }
    return Object.keys(e10).every((n) => {
      let i = e10[n];
      return (n in t || qr(o = i) && o[_e]().matcherType === "optional") && we(i, t[n], r);
      var o;
    });
  }
  return Object.is(t, e10);
}, Ge = (e10) => {
  var t, r, n;
  return Jn(e10) ? qr(e10) ? (t = (r = (n = e10[_e]()).getSelectionKeys) == null ? void 0 : r.call(n)) != null ? t : [] : Array.isArray(e10) ? Qt(e10, Ge) : Qt(Object.values(e10), Ge) : [];
}, Qt = (e10, t) => e10.reduce((r, n) => r.concat(t(n)), []);
function pe(e10) {
  return Object.assign(e10, { optional: () => Ru(e10), and: (t) => j(e10, t), or: (t) => Cu(e10, t), select: (t) => t === void 0 ? Ao(e10) : Ao(t, e10) });
}
function Ru(e10) {
  return pe({ [_e]: () => ({ match: (t) => {
    let r = {}, n = (i, o) => {
      r[i] = o;
    };
    return t === void 0 ? (Ge(e10).forEach((i) => n(i, void 0)), { matched: true, selections: r }) : { matched: we(e10, t, n), selections: r };
  }, getSelectionKeys: () => Ge(e10), matcherType: "optional" }) });
}
function j(...e10) {
  return pe({ [_e]: () => ({ match: (t) => {
    let r = {}, n = (i, o) => {
      r[i] = o;
    };
    return { matched: e10.every((i) => we(i, t, n)), selections: r };
  }, getSelectionKeys: () => Qt(e10, Ge), matcherType: "and" }) });
}
function Cu(...e10) {
  return pe({ [_e]: () => ({ match: (t) => {
    let r = {}, n = (i, o) => {
      r[i] = o;
    };
    return Qt(e10, Ge).forEach((i) => n(i, void 0)), { matched: e10.some((i) => we(i, t, n)), selections: r };
  }, getSelectionKeys: () => Qt(e10, Ge), matcherType: "or" }) });
}
function I(e10) {
  return { [_e]: () => ({ match: (t) => ({ matched: !!e10(t) }) }) };
}
function Ao(...e10) {
  let t = typeof e10[0] == "string" ? e10[0] : void 0, r = e10.length === 2 ? e10[1] : typeof e10[0] == "string" ? void 0 : e10[0];
  return pe({ [_e]: () => ({ match: (n) => {
    let i = { [t != null ? t : jr]: n };
    return { matched: r === void 0 || we(r, n, (o, s) => {
      i[o] = s;
    }), selections: i };
  }, getSelectionKeys: () => [t != null ? t : jr].concat(r === void 0 ? [] : Ge(r)) }) });
}
function be(e10) {
  return typeof e10 == "number";
}
function je(e10) {
  return typeof e10 == "string";
}
function Ve(e10) {
  return typeof e10 == "bigint";
}
pe(I(function(e10) {
  return true;
}));
var Be = (e10) => Object.assign(pe(e10), { startsWith: (t) => {
  return Be(j(e10, (r = t, I((n) => je(n) && n.startsWith(r)))));
  var r;
}, endsWith: (t) => {
  return Be(j(e10, (r = t, I((n) => je(n) && n.endsWith(r)))));
  var r;
}, minLength: (t) => Be(j(e10, ((r) => I((n) => je(n) && n.length >= r))(t))), length: (t) => Be(j(e10, ((r) => I((n) => je(n) && n.length === r))(t))), maxLength: (t) => Be(j(e10, ((r) => I((n) => je(n) && n.length <= r))(t))), includes: (t) => {
  return Be(j(e10, (r = t, I((n) => je(n) && n.includes(r)))));
  var r;
}, regex: (t) => {
  return Be(j(e10, (r = t, I((n) => je(n) && !!n.match(r)))));
  var r;
} }); Be(I(je)); var Ee = (e10) => Object.assign(pe(e10), { between: (t, r) => Ee(j(e10, ((n, i) => I((o) => be(o) && n <= o && i >= o))(t, r))), lt: (t) => Ee(j(e10, ((r) => I((n) => be(n) && n < r))(t))), gt: (t) => Ee(j(e10, ((r) => I((n) => be(n) && n > r))(t))), lte: (t) => Ee(j(e10, ((r) => I((n) => be(n) && n <= r))(t))), gte: (t) => Ee(j(e10, ((r) => I((n) => be(n) && n >= r))(t))), int: () => Ee(j(e10, I((t) => be(t) && Number.isInteger(t)))), finite: () => Ee(j(e10, I((t) => be(t) && Number.isFinite(t)))), positive: () => Ee(j(e10, I((t) => be(t) && t > 0))), negative: () => Ee(j(e10, I((t) => be(t) && t < 0))) }); Ee(I(be)); var Ue = (e10) => Object.assign(pe(e10), { between: (t, r) => Ue(j(e10, ((n, i) => I((o) => Ve(o) && n <= o && i >= o))(t, r))), lt: (t) => Ue(j(e10, ((r) => I((n) => Ve(n) && n < r))(t))), gt: (t) => Ue(j(e10, ((r) => I((n) => Ve(n) && n > r))(t))), lte: (t) => Ue(j(e10, ((r) => I((n) => Ve(n) && n <= r))(t))), gte: (t) => Ue(j(e10, ((r) => I((n) => Ve(n) && n >= r))(t))), positive: () => Ue(j(e10, I((t) => Ve(t) && t > 0))), negative: () => Ue(j(e10, I((t) => Ve(t) && t < 0))) }); Ue(I(Ve)); pe(I(function(e10) {
  return typeof e10 == "boolean";
})); pe(I(function(e10) {
  return typeof e10 == "symbol";
})); pe(I(function(e10) {
  return e10 == null;
})); pe(I(function(e10) {
  return e10 != null;
}));
var Wn = { matched: false, value: void 0 };
function mt(e10) {
  return new Hn(e10, Wn);
}
var Hn = class e {
  constructor(t, r) {
    this.input = void 0, this.state = void 0, this.input = t, this.state = r;
  }
  with(...t) {
    if (this.state.matched) return this;
    let r = t[t.length - 1], n = [t[0]], i;
    t.length === 3 && typeof t[1] == "function" ? i = t[1] : t.length > 2 && n.push(...t.slice(1, t.length - 1));
    let o = false, s = {}, a = (u, c) => {
      o = true, s[u] = c;
    }, l = !n.some((u) => we(u, this.input, a)) || i && !i(this.input) ? Wn : { matched: true, value: r(o ? jr in s ? s[jr] : s : this.input, this.input) };
    return new e(this.input, l);
  }
  when(t, r) {
    if (this.state.matched) return this;
    let n = !!t(this.input);
    return new e(this.input, n ? { matched: true, value: r(this.input, this.input) } : Wn);
  }
  otherwise(t) {
    return this.state.matched ? this.state.value : t(this.input);
  }
  exhaustive() {
    if (this.state.matched) return this.state.value;
    let t;
    try {
      t = JSON.stringify(this.input);
    } catch {
      t = this.input;
    }
    throw new Error(`Pattern matching error: no pattern matches value ${t}`);
  }
  run() {
    return this.exhaustive();
  }
  returnType() {
    return this;
  }
};
var Do = require$$6;
var Su = { warn: ke("prisma:warn") }, Au = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
function Vr(e10, ...t) {
  Au.warn() && console.warn(`${Su.warn} ${e10}`, ...t);
}
var Iu = (0, Do.promisify)(ko.default.exec), te = L("prisma:get-platform"), Ou = ["1.0.x", "1.1.x", "3.0.x"];
async function _o() {
  let e10 = Ur.default.platform(), t = process.arch;
  if (e10 === "freebsd") {
    let s = await Gr("freebsd-version");
    if (s && s.trim().length > 0) {
      let l = /^(\d+)\.?/.exec(s);
      if (l) return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: t };
    }
  }
  if (e10 !== "linux") return { platform: e10, arch: t };
  let r = await Du(), n = await ju(), i = Fu({ arch: t, archFromUname: n, familyDistro: r.familyDistro }), { libssl: o } = await Lu(i);
  return { platform: "linux", libssl: o, arch: t, archFromUname: n, ...r };
}
function ku(e10) {
  let t = /^ID="?([^"\n]*)"?$/im, r = /^ID_LIKE="?([^"\n]*)"?$/im, n = t.exec(e10), i = n && n[1] && n[1].toLowerCase() || "", o = r.exec(e10), s = o && o[1] && o[1].toLowerCase() || "", a = mt({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: void 0, familyDistro: void 0, originalDistro: l }));
  return te(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
}
async function Du() {
  let e10 = "/etc/os-release";
  try {
    let t = await Kn.default.readFile(e10, { encoding: "utf-8" });
    return ku(t);
  } catch {
    return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 };
  }
}
function _u(e10) {
  let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e10);
  if (t) {
    let r = `${t[1]}.x`;
    return Fo(r);
  }
}
function Io(e10) {
  var _a3;
  let t = /libssl\.so\.(\d)(\.\d)?/.exec(e10);
  if (t) {
    let r = `${t[1]}${(_a3 = t[2]) != null ? _a3 : ".0"}.x`;
    return Fo(r);
  }
}
function Fo(e10) {
  let t = (() => {
    if (No(e10)) return e10;
    let r = e10.split(".");
    return r[1] = "0", r.join(".");
  })();
  if (Ou.includes(t)) return t;
}
function Fu(e10) {
  return mt(e10).with({ familyDistro: "musl" }, () => (te('Trying platform-specific paths for "alpine"'), ["/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: t }) => (te('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (te('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: t, arch: r, archFromUname: n }) => (te(`Don't know any platform-specific paths for "${t}" on ${r} (${n})`), []));
}
async function Lu(e10) {
  let t = 'grep -v "libssl.so.0"', r = await Oo(e10);
  if (r) {
    te(`Found libssl.so file using platform-specific paths: ${r}`);
    let o = Io(r);
    if (te(`The parsed libssl version is: ${o}`), o) return { libssl: o, strategy: "libssl-specific-path" };
  }
  te('Falling back to "ldconfig" and other generic paths');
  let n = await Gr(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`);
  if (n || (n = await Oo(["/lib64", "/usr/lib64", "/lib"])), n) {
    te(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
    let o = Io(n);
    if (te(`The parsed libssl version is: ${o}`), o) return { libssl: o, strategy: "ldconfig" };
  }
  let i = await Gr("openssl version -v");
  if (i) {
    te(`Found openssl binary with version: ${i}`);
    let o = _u(i);
    if (te(`The parsed openssl version is: ${o}`), o) return { libssl: o, strategy: "openssl-binary" };
  }
  return te("Couldn't find any version of libssl or OpenSSL in the system"), {};
}
async function Oo(e10) {
  for (let t of e10) {
    let r = await Nu(t);
    if (r) return r;
  }
}
async function Nu(e10) {
  try {
    return (await Kn.default.readdir(e10)).find((r) => r.startsWith("libssl.so.") && !r.startsWith("libssl.so.0"));
  } catch (t) {
    if (t.code === "ENOENT") return;
    throw t;
  }
}
async function nt() {
  let { binaryTarget: e10 } = await Lo();
  return e10;
}
function Mu(e10) {
  return e10.binaryTarget !== void 0;
}
async function zn() {
  let { memoized: e10, ...t } = await Lo();
  return t;
}
var Br = {};
async function Lo() {
  if (Mu(Br)) return Promise.resolve({ ...Br, memoized: true });
  let e10 = await _o(), t = $u(e10);
  return Br = { ...e10, binaryTarget: t }, { ...Br, memoized: false };
}
function $u(e10) {
  let { platform: t, arch: r, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e10;
  t === "linux" && !["x64", "arm64"].includes(r) && Vr(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures (detected "${r}" instead). If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
  let l = "1.1.x";
  if (t === "linux" && i === void 0) {
    let c = mt({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
    Vr(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
  }
  let u = "debian";
  if (t === "linux" && o === void 0 && te(`Distro is "${a}". Falling back to Prisma engines built for "${u}".`), t === "darwin" && r === "arm64") return "darwin-arm64";
  if (t === "darwin") return "darwin";
  if (t === "win32") return "windows";
  if (t === "freebsd") return o;
  if (t === "openbsd") return "openbsd";
  if (t === "netbsd") return "netbsd";
  if (t === "linux" && o === "nixos") return "linux-nixos";
  if (t === "linux" && r === "arm64") return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
  if (t === "linux" && r === "arm") return `linux-arm-openssl-${i || l}`;
  if (t === "linux" && o === "musl") {
    let c = "linux-musl";
    return !i || No(i) ? c : `${c}-openssl-${i}`;
  }
  return t === "linux" && o && i ? `${o}-openssl-${i}` : (t !== "linux" && Vr(`Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
}
async function qu(e10) {
  try {
    return await e10();
  } catch {
    return;
  }
}
function Gr(e10) {
  return qu(async () => {
    let t = await Iu(e10);
    return te(`Command "${e10}" successfully returned "${t.stdout}"`), t.stdout;
  });
}
async function ju() {
  var _a3;
  return typeof Ur.default.machine == "function" ? Ur.default.machine() : (_a3 = await Gr("uname -m")) == null ? void 0 : _a3.trim();
}
function No(e10) {
  return e10.startsWith("1.");
}
var Ho = k(Wo());
function ni(e10) {
  return (0, Ho.default)(e10, e10, { fallback: X });
}
k(oi());
var $ = k(require$$1); k(oi()); L("prisma:engines");
function Ko() {
  return $.default.join(__dirname, "../");
}
$.default.join(__dirname, "../query-engine-darwin");
$.default.join(__dirname, "../query-engine-darwin-arm64");
$.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
$.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
$.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
$.default.join(__dirname, "../query-engine-linux-static-x64");
$.default.join(__dirname, "../query-engine-linux-static-arm64");
$.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
$.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
$.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
$.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
$.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
$.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
$.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
$.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
$.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
$.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
$.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
$.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
$.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
$.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
$.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
$.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
$.default.join(__dirname, "../query_engine-windows.dll.node");
k(require$$2); L("chmodPlusX");
function li(e10) {
  let t = e10.e, r = (a) => `Prisma cannot find the required \`${a}\` system library in your system`, n = t.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${ni("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${Oe(e10.id)}\`).`, s = mt({ message: t.message, code: t.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n && a.includes("libz"), () => `${r("libz")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libgcc_s"), () => `${r("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libssl"), () => {
    let a = e10.platformInfo.libssl ? `openssl-${e10.platformInfo.libssl}` : "openssl";
    return `${r("libssl")}. Please install ${a} and try again.`;
  }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e10.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e10.platformInfo.originalDistro} on (${e10.platformInfo.archFromUname}) which uses the \`${e10.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
  return `${o}
${s}

Details: ${t.message}`;
}
var pi = k(Xo()), Kr = k(require$$2);
var ht = k(require$$1);
function es(e10) {
  let t = e10.ignoreProcessEnv ? {} : process.env, r = (n) => {
    var _a3, _b2;
    return (_b2 = (_a3 = n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)) == null ? void 0 : _a3.reduce(function(o, s) {
      let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
      if (!a) return o;
      let l = a[1], u, c;
      if (l === "\\") c = a[0], u = c.replace("\\$", "$");
      else {
        let p = a[2];
        c = a[0].substring(l.length), u = Object.hasOwnProperty.call(t, p) ? t[p] : e10.parsed[p] || "", u = r(u);
      }
      return o.replace(c, u);
    }, n)) != null ? _b2 : n;
  };
  for (let n in e10.parsed) {
    let i = Object.hasOwnProperty.call(t, n) ? t[n] : e10.parsed[n];
    e10.parsed[n] = r(i);
  }
  for (let n in e10.parsed) t[n] = e10.parsed[n];
  return e10;
}
var ci = L("prisma:tryLoadEnv");
function Ht({ rootEnvPath: e10, schemaEnvPath: t }, r = { conflictCheck: "none" }) {
  var _a3, _b2;
  let n = ts(e10);
  r.conflictCheck !== "none" && nc(n, t, r.conflictCheck);
  let i = null;
  return rs(n == null ? void 0 : n.path, t) || (i = ts(t)), !n && !i && ci("No Environment variables loaded"), (i == null ? void 0 : i.dotenvResult.error) ? console.error(ce(H("Schema Env Error: ")) + i.dotenvResult.error) : { message: [n == null ? void 0 : n.message, i == null ? void 0 : i.message].filter(Boolean).join(`
`), parsed: { ...(_a3 = n == null ? void 0 : n.dotenvResult) == null ? void 0 : _a3.parsed, ...(_b2 = i == null ? void 0 : i.dotenvResult) == null ? void 0 : _b2.parsed } };
}
function nc(e10, t, r) {
  let n = e10 == null ? void 0 : e10.dotenvResult.parsed, i = !rs(e10 == null ? void 0 : e10.path, t);
  if (n && t && i && Kr.default.existsSync(t)) {
    let o = pi.default.parse(Kr.default.readFileSync(t)), s = [];
    for (let a in o) n[a] === o[a] && s.push(a);
    if (s.length > 0) {
      let a = ht.default.relative(process.cwd(), e10.path), l = ht.default.relative(process.cwd(), t);
      if (r === "error") {
        let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${X(a)} and ${X(l)}
Conflicting env vars:
${s.map((c) => `  ${H(c)}`).join(`
`)}

We suggest to move the contents of ${X(l)} to ${X(a)} to consolidate your env vars.
`;
        throw new Error(u);
      } else if (r === "warn") {
        let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c) => H(c)).join(", ")} in ${X(a)} and ${X(l)}
Env vars from ${X(l)} overwrite the ones from ${X(a)}
      `;
        console.warn(`${ke("warn(prisma)")} ${u}`);
      }
    }
  }
}
function ts(e10) {
  if (ic(e10)) {
    ci(`Environment variables loaded from ${e10}`);
    let t = pi.default.config({ path: e10, debug: process.env.DOTENV_CONFIG_DEBUG ? true : void 0 });
    return { dotenvResult: es(t), message: Oe(`Environment variables loaded from ${ht.default.relative(process.cwd(), e10)}`), path: e10 };
  } else ci(`Environment variables not found at ${e10}`);
  return null;
}
function rs(e10, t) {
  return e10 && t && ht.default.resolve(e10) === ht.default.resolve(t);
}
function ic(e10) {
  return !!(e10 && Kr.default.existsSync(e10));
}
var ns = "library";
function Kt(e10) {
  let t = oc();
  return t || ((e10 == null ? void 0 : e10.config.engineType) === "library" ? "library" : (e10 == null ? void 0 : e10.config.engineType) === "binary" ? "binary" : ns);
}
function oc() {
  let e10 = process.env.PRISMA_CLIENT_ENGINE_TYPE;
  return e10 === "library" ? "library" : e10 === "binary" ? "binary" : void 0;
}
var Je;
((t) => {
  ((E) => (E.findUnique = "findUnique", E.findUniqueOrThrow = "findUniqueOrThrow", E.findFirst = "findFirst", E.findFirstOrThrow = "findFirstOrThrow", E.findMany = "findMany", E.create = "create", E.createMany = "createMany", E.createManyAndReturn = "createManyAndReturn", E.update = "update", E.updateMany = "updateMany", E.upsert = "upsert", E.delete = "delete", E.deleteMany = "deleteMany", E.groupBy = "groupBy", E.count = "count", E.aggregate = "aggregate", E.findRaw = "findRaw", E.aggregateRaw = "aggregateRaw"))(t.ModelAction || (t.ModelAction = {}));
})(Je || (Je = {}));
var zt = k(require$$1);
function di(e10) {
  return zt.default.sep === zt.default.posix.sep ? e10 : e10.split(zt.default.sep).join(zt.default.posix.sep);
}
var us = k(mi());
function gi(e10) {
  return String(new fi(e10));
}
var fi = class {
  constructor(t) {
    this.config = t;
  }
  toString() {
    let { config: t } = this, r = t.provider.fromEnvVar ? `env("${t.provider.fromEnvVar}")` : t.provider.value, n = JSON.parse(JSON.stringify({ provider: r, binaryTargets: ac(t.binaryTargets) }));
    return `generator ${t.name} {
${(0, us.default)(lc(n), 2)}
}`;
  }
};
function ac(e10) {
  let t;
  if (e10.length > 0) {
    let r = e10.find((n) => n.fromEnvVar !== null);
    r ? t = `env("${r.fromEnvVar}")` : t = e10.map((n) => n.native ? "native" : n.value);
  } else t = void 0;
  return t;
}
function lc(e10) {
  let t = Object.keys(e10).reduce((r, n) => Math.max(r, n.length), 0);
  return Object.entries(e10).map(([r, n]) => `${r.padEnd(t)} = ${uc(n)}`).join(`
`);
}
function uc(e10) {
  return JSON.parse(JSON.stringify(e10, (t, r) => Array.isArray(r) ? `[${r.map((n) => JSON.stringify(n)).join(", ")}]` : JSON.stringify(r)));
}
var Zt = {};
Vt(Zt, { error: () => dc, info: () => pc, log: () => cc, query: () => mc, should: () => cs, tags: () => Yt, warn: () => hi });
var Yt = { error: ce("prisma:error"), warn: ke("prisma:warn"), info: De("prisma:info"), query: rt("prisma:query") }, cs = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
function cc(...e10) {
  console.log(...e10);
}
function hi(e10, ...t) {
  cs.warn() && console.warn(`${Yt.warn} ${e10}`, ...t);
}
function pc(e10, ...t) {
  console.info(`${Yt.info} ${e10}`, ...t);
}
function dc(e10, ...t) {
  console.error(`${Yt.error} ${e10}`, ...t);
}
function mc(e10, ...t) {
  console.log(`${Yt.query} ${e10}`, ...t);
}
function zr(e10, t) {
  if (!e10) throw new Error(`${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
}
function Fe(e10, t) {
  throw new Error(t);
}
function bi(e10, t) {
  return Object.prototype.hasOwnProperty.call(e10, t);
}
var Ei = (e10, t) => e10.reduce((r, n) => (r[t(n)] = n, r), {});
function yt(e10, t) {
  let r = {};
  for (let n of Object.keys(e10)) r[n] = t(e10[n], n);
  return r;
}
function wi(e10, t) {
  if (e10.length === 0) return;
  let r = e10[0];
  for (let n = 1; n < e10.length; n++) t(r, e10[n]) < 0 && (r = e10[n]);
  return r;
}
function w(e10, t) {
  Object.defineProperty(e10, "name", { value: t, configurable: true });
}
var gs = /* @__PURE__ */ new Set(), Xt = (e10, t, ...r) => {
  gs.has(e10) || (gs.add(e10), hi(t, ...r));
};
var V = class extends Error {
  constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
    super(t), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientKnownRequestError";
  }
};
w(V, "PrismaClientKnownRequestError");
var Le = class extends V {
  constructor(t, r) {
    super(t, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
  }
};
w(Le, "NotFoundError");
var R = class e2 extends Error {
  constructor(t, r, n) {
    super(t), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e2);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientInitializationError";
  }
};
w(R, "PrismaClientInitializationError");
var le = class extends Error {
  constructor(t, r) {
    super(t), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
};
w(le, "PrismaClientRustPanicError");
var B = class extends Error {
  constructor(t, { clientVersion: r, batchRequestIdx: n }) {
    super(t), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientUnknownRequestError";
  }
};
w(B, "PrismaClientUnknownRequestError");
var J = class extends Error {
  constructor(r, { clientVersion: n }) {
    super(r);
    this.name = "PrismaClientValidationError";
    this.clientVersion = n;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientValidationError";
  }
};
w(J, "PrismaClientValidationError");
var bt = class {
  constructor(t) {
    this._engine = t;
  }
  prometheus(t) {
    return this._engine.metrics({ format: "prometheus", ...t });
  }
  json(t) {
    return this._engine.metrics({ format: "json", ...t });
  }
};
function er(e10) {
  let t;
  return { get() {
    return t || (t = { value: e10() }), t.value;
  } };
}
function hs(e10, t) {
  let r = er(() => gc(t));
  Object.defineProperty(e10, "dmmf", { get: () => r.get() });
}
function gc(e10) {
  return { datamodel: { models: xi(e10.models), enums: xi(e10.enums), types: xi(e10.types) } };
}
function xi(e10) {
  return Object.entries(e10).map(([t, r]) => ({ name: t, ...r }));
}
var Xr = Symbol(), Pi = /* @__PURE__ */ new WeakMap(), Ne = class {
  constructor(t) {
    t === Xr ? Pi.set(this, `Prisma.${this._getName()}`) : Pi.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
  }
  _getName() {
    return this.constructor.name;
  }
  toString() {
    return Pi.get(this);
  }
}, tr = class extends Ne {
  _getNamespace() {
    return "NullTypes";
  }
}, rr = class extends tr {
};
vi(rr, "DbNull");
var nr = class extends tr {
};
vi(nr, "JsonNull");
var ir = class extends tr {
};
vi(ir, "AnyNull");
var en = { classes: { DbNull: rr, JsonNull: nr, AnyNull: ir }, instances: { DbNull: new rr(Xr), JsonNull: new nr(Xr), AnyNull: new ir(Xr) } };
function vi(e10, t) {
  Object.defineProperty(e10, "name", { value: t, configurable: true });
}
var ys = Symbol(), or = class {
  constructor(t) {
    if (t !== ys) throw new Error("Skip instance can not be constructed directly");
  }
  ifUndefined(t) {
    return t === void 0 ? tn : t;
  }
}, tn = new or(ys);
function xe(e10) {
  return e10 instanceof or;
}
var Ti = /* @__PURE__ */ new WeakMap(), sr = class {
  constructor(t, r) {
    Ti.set(this, { sql: t, values: r });
  }
  get sql() {
    return Ti.get(this).sql;
  }
  get values() {
    return Ti.get(this).values;
  }
};
function bs(e10) {
  return (...t) => new sr(e10, t);
}
function Ri(e10) {
  return { ok: true, value: e10, map(t) {
    return Ri(t(e10));
  }, flatMap(t) {
    return t(e10);
  } };
}
function ar(e10) {
  return { ok: false, error: e10, map() {
    return ar(e10);
  }, flatMap() {
    return ar(e10);
  } };
}
var Ci = class {
  constructor() {
    this.registeredErrors = [];
  }
  consumeError(t) {
    return this.registeredErrors[t];
  }
  registerNewError(t) {
    let r = 0;
    for (; this.registeredErrors[r] !== void 0; ) r++;
    return this.registeredErrors[r] = { error: t }, r;
  }
}, Si = (e10) => {
  let t = new Ci();
  if (e10.transactionContext === void 0 && e10.startTransaction === void 0) throw new Error("[prisma:driverAdapters] Either `adapter.transactionContext` or `adapter.startTransaction` must be defined.");
  let r = e10.transactionContext === void 0 ? fe(t, () => Promise.resolve(Ri(e10))) : fe(t, e10.transactionContext.bind(e10)), n = { adapterName: e10.adapterName, errorRegistry: t, queryRaw: fe(t, e10.queryRaw.bind(e10)), executeRaw: fe(t, e10.executeRaw.bind(e10)), provider: e10.provider, transactionContext: async (...i) => (await r(...i)).map((s) => hc(t, s)) };
  return e10.getConnectionInfo && (n.getConnectionInfo = bc(t, e10.getConnectionInfo.bind(e10))), n;
}, hc = (e10, t) => {
  let r = fe(e10, t.startTransaction.bind(t));
  return { adapterName: t.adapterName, provider: t.provider, queryRaw: fe(e10, t.queryRaw.bind(t)), executeRaw: fe(e10, t.executeRaw.bind(t)), startTransaction: async (...n) => (await r(...n)).map((o) => yc(e10, o)) };
}, yc = (e10, t) => ({ adapterName: t.adapterName, provider: t.provider, options: t.options, queryRaw: fe(e10, t.queryRaw.bind(t)), executeRaw: fe(e10, t.executeRaw.bind(t)), commit: fe(e10, t.commit.bind(t)), rollback: fe(e10, t.rollback.bind(t)) });
function fe(e10, t) {
  return async (...r) => {
    try {
      return await t(...r);
    } catch (n) {
      let i = e10.registerNewError(n);
      return ar({ kind: "GenericJs", id: i });
    }
  };
}
function bc(e10, t) {
  return (...r) => {
    try {
      return t(...r);
    } catch (n) {
      let i = e10.registerNewError(n);
      return ar({ kind: "GenericJs", id: i });
    }
  };
}
var Gl = k(ii());
var Ql = require$$7, Jl = require$$8, Wl = k(require$$2), _r = k(require$$1);
var ie = class e3 {
  constructor(t, r) {
    if (t.length - 1 !== r.length) throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
    let n = r.reduce((s, a) => s + (a instanceof e3 ? a.values.length : 1), 0);
    this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
    let i = 0, o = 0;
    for (; i < r.length; ) {
      let s = r[i++], a = t[i];
      if (s instanceof e3) {
        this.strings[o] += s.strings[0];
        let l = 0;
        for (; l < s.values.length; ) this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
        this.strings[o] += a;
      } else this.values[o++] = s, this.strings[o] = a;
    }
  }
  get sql() {
    let t = this.strings.length, r = 1, n = this.strings[0];
    for (; r < t; ) n += `?${this.strings[r++]}`;
    return n;
  }
  get statement() {
    let t = this.strings.length, r = 1, n = this.strings[0];
    for (; r < t; ) n += `:${r}${this.strings[r++]}`;
    return n;
  }
  get text() {
    let t = this.strings.length, r = 1, n = this.strings[0];
    for (; r < t; ) n += `$${r}${this.strings[r++]}`;
    return n;
  }
  inspect() {
    return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
  }
};
function Es(e10, t = ",", r = "", n = "") {
  if (e10.length === 0) throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
  return new ie([r, ...Array(e10.length - 1).fill(t), n], e10);
}
function Ai(e10) {
  return new ie([e10], []);
}
var ws = Ai("");
function Ii(e10, ...t) {
  return new ie(e10, t);
}
function lr(e10) {
  return { getKeys() {
    return Object.keys(e10);
  }, getPropertyValue(t) {
    return e10[t];
  } };
}
function re(e10, t) {
  return { getKeys() {
    return [e10];
  }, getPropertyValue() {
    return t();
  } };
}
var Pe = class {
  constructor() {
    this._map = /* @__PURE__ */ new Map();
  }
  get(t) {
    var _a3;
    return (_a3 = this._map.get(t)) == null ? void 0 : _a3.value;
  }
  set(t, r) {
    this._map.set(t, { value: r });
  }
  getOrCreate(t, r) {
    let n = this._map.get(t);
    if (n) return n.value;
    let i = r();
    return this.set(t, i), i;
  }
};
function it(e10) {
  let t = new Pe();
  return { getKeys() {
    return e10.getKeys();
  }, getPropertyValue(r) {
    return t.getOrCreate(r, () => e10.getPropertyValue(r));
  }, getPropertyDescriptor(r) {
    var _a3;
    return (_a3 = e10.getPropertyDescriptor) == null ? void 0 : _a3.call(e10, r);
  } };
}
var rn = { enumerable: true, configurable: true, writable: true };
function nn(e10) {
  let t = new Set(e10);
  return { getOwnPropertyDescriptor: () => rn, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
}
var xs = Symbol.for("nodejs.util.inspect.custom");
function ve(e10, t) {
  let r = Ec(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e10, { get(o, s) {
    if (n.has(s)) return o[s];
    let a = r.get(s);
    return a ? a.getPropertyValue(s) : o[s];
  }, has(o, s) {
    var _a3, _b2;
    if (n.has(s)) return true;
    let a = r.get(s);
    return a ? (_b2 = (_a3 = a.has) == null ? void 0 : _a3.call(a, s)) != null ? _b2 : true : Reflect.has(o, s);
  }, ownKeys(o) {
    let s = Ps(Reflect.ownKeys(o), r), a = Ps(Array.from(r.keys()), r);
    return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
  }, set(o, s, a) {
    var _a3, _b2, _c3;
    return ((_c3 = (_b2 = (_a3 = r.get(s)) == null ? void 0 : _a3.getPropertyDescriptor) == null ? void 0 : _b2.call(_a3, s)) == null ? void 0 : _c3.writable) === false ? false : (n.add(s), Reflect.set(o, s, a));
  }, getOwnPropertyDescriptor(o, s) {
    let a = Reflect.getOwnPropertyDescriptor(o, s);
    if (a && !a.configurable) return a;
    let l = r.get(s);
    return l ? l.getPropertyDescriptor ? { ...rn, ...l == null ? void 0 : l.getPropertyDescriptor(s) } : rn : a;
  }, defineProperty(o, s, a) {
    return n.add(s), Reflect.defineProperty(o, s, a);
  } });
  return i[xs] = function() {
    let o = { ...this };
    return delete o[xs], o;
  }, i;
}
function Ec(e10) {
  let t = /* @__PURE__ */ new Map();
  for (let r of e10) {
    let n = r.getKeys();
    for (let i of n) t.set(i, r);
  }
  return t;
}
function Ps(e10, t) {
  return e10.filter((r) => {
    var _a3, _b2, _c3;
    return (_c3 = (_b2 = (_a3 = t.get(r)) == null ? void 0 : _a3.has) == null ? void 0 : _b2.call(_a3, r)) != null ? _c3 : true;
  });
}
function Et(e10) {
  return { getKeys() {
    return e10;
  }, has() {
    return false;
  }, getPropertyValue() {
  } };
}
function wt(e10, t) {
  return { batch: e10, transaction: (t == null ? void 0 : t.kind) === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
}
var xt = class {
  constructor(t = 0, r) {
    this.context = r;
    this.lines = [];
    this.currentLine = "";
    this.currentIndent = 0;
    this.currentIndent = t;
  }
  write(t) {
    return typeof t == "string" ? this.currentLine += t : t.write(this), this;
  }
  writeJoined(t, r, n = (i, o) => o.write(i)) {
    let i = r.length - 1;
    for (let o = 0; o < r.length; o++) n(r[o], this), o !== i && this.write(t);
    return this;
  }
  writeLine(t) {
    return this.write(t).newLine();
  }
  newLine() {
    this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
    let t = this.afterNextNewLineCallback;
    return this.afterNextNewLineCallback = void 0, t == null ? void 0 : t(), this;
  }
  withIndent(t) {
    return this.indent(), t(this), this.unindent(), this;
  }
  afterNextNewline(t) {
    return this.afterNextNewLineCallback = t, this;
  }
  indent() {
    return this.currentIndent++, this;
  }
  unindent() {
    return this.currentIndent > 0 && this.currentIndent--, this;
  }
  addMarginSymbol(t) {
    return this.marginSymbol = t, this;
  }
  toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`);
  }
  getCurrentLineLength() {
    return this.currentLine.length;
  }
  indentedCurrentLine() {
    let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
    return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
  }
};
function vs(e10) {
  return e10.substring(0, 1).toLowerCase() + e10.substring(1);
}
function Pt(e10) {
  return e10 instanceof Date || Object.prototype.toString.call(e10) === "[object Date]";
}
function on(e10) {
  return e10.toString() !== "Invalid Date";
}
var vt = 9e15, ze = 1e9, Oi = "0123456789abcdef", an = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", ln = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ki = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -vt, maxE: vt, crypto: false }, Ss, Me, x = true, cn = "[DecimalError] ", Ke = cn + "Invalid argument: ", As = cn + "Precision limit exceeded", Is = cn + "crypto unavailable", Os = "[object Decimal]", ee = Math.floor, G = Math.pow, wc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, xc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Pc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, ks = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, he = 1e7, b = 7, vc = 9007199254740991, Tc = an.length - 1, Di = ln.length - 1, m = { toStringTag: Os };
m.absoluteValue = m.abs = function() {
  var e10 = new this.constructor(this);
  return e10.s < 0 && (e10.s = 1), y(e10);
};
m.ceil = function() {
  return y(new this.constructor(this), this.e + 1, 2);
};
m.clampedTo = m.clamp = function(e10, t) {
  var r, n = this, i = n.constructor;
  if (e10 = new i(e10), t = new i(t), !e10.s || !t.s) return new i(NaN);
  if (e10.gt(t)) throw Error(Ke + t);
  return r = n.cmp(e10), r < 0 ? e10 : n.cmp(t) > 0 ? t : new i(n);
};
m.comparedTo = m.cmp = function(e10) {
  var t, r, n, i, o = this, s = o.d, a = (e10 = new o.constructor(e10)).d, l = o.s, u = e10.s;
  if (!s || !a) return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
  if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -u : 0;
  if (l !== u) return l;
  if (o.e !== e10.e) return o.e > e10.e ^ l < 0 ? 1 : -1;
  for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t) if (s[t] !== a[t]) return s[t] > a[t] ^ l < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
};
m.cosine = m.cos = function() {
  var e10, t, r = this, n = r.constructor;
  return r.d ? r.d[0] ? (e10 = n.precision, t = n.rounding, n.precision = e10 + Math.max(r.e, r.sd()) + b, n.rounding = 1, r = Rc(n, Ns(n, r)), n.precision = e10, n.rounding = t, y(Me == 2 || Me == 3 ? r.neg() : r, e10, t, true)) : new n(1) : new n(NaN);
};
m.cubeRoot = m.cbrt = function() {
  var e10, t, r, n, i, o, s, a, l, u, c = this, p = c.constructor;
  if (!c.isFinite() || c.isZero()) return new p(c);
  for (x = false, o = c.s * G(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = K(c.d), e10 = c.e, (o = (e10 - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = G(r, 1 / 3), e10 = ee((e10 + 1) / 3) - (e10 % 3 == (e10 < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e10 : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e10), n = new p(r), n.s = c.s) : n = new p(o.toString()), s = (e10 = p.precision) + 3; ; ) if (a = n, l = a.times(a).times(a), u = l.plus(c), n = N(u.plus(c).times(a), u.plus(l), s + 2, 1), K(a.d).slice(0, s) === (r = K(n.d)).slice(0, s)) if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
    if (!i && (y(a, e10 + 1, 0), a.times(a).times(a).eq(c))) {
      n = a;
      break;
    }
    s += 4, i = 1;
  } else {
    (!+r || !+r.slice(1) && r.charAt(0) == "5") && (y(n, e10 + 1, 1), t = !n.times(n).times(n).eq(c));
    break;
  }
  return x = true, y(n, e10, p.rounding, t);
};
m.decimalPlaces = m.dp = function() {
  var e10, t = this.d, r = NaN;
  if (t) {
    if (e10 = t.length - 1, r = (e10 - ee(this.e / b)) * b, e10 = t[e10], e10) for (; e10 % 10 == 0; e10 /= 10) r--;
    r < 0 && (r = 0);
  }
  return r;
};
m.dividedBy = m.div = function(e10) {
  return N(this, new this.constructor(e10));
};
m.dividedToIntegerBy = m.divToInt = function(e10) {
  var t = this, r = t.constructor;
  return y(N(t, new r(e10), 0, 1, 1), r.precision, r.rounding);
};
m.equals = m.eq = function(e10) {
  return this.cmp(e10) === 0;
};
m.floor = function() {
  return y(new this.constructor(this), this.e + 1, 3);
};
m.greaterThan = m.gt = function(e10) {
  return this.cmp(e10) > 0;
};
m.greaterThanOrEqualTo = m.gte = function(e10) {
  var t = this.cmp(e10);
  return t == 1 || t === 0;
};
m.hyperbolicCosine = m.cosh = function() {
  var e10, t, r, n, i, o = this, s = o.constructor, a = new s(1);
  if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
  if (o.isZero()) return a;
  r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e10 = Math.ceil(i / 3), t = (1 / dn(4, e10)).toString()) : (e10 = 16, t = "2.3283064365386962890625e-10"), o = Tt(s, 1, o.times(t), new s(1), true);
  for (var l, u = e10, c = new s(8); u--; ) l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
  return y(o, s.precision = r, s.rounding = n, true);
};
m.hyperbolicSine = m.sinh = function() {
  var e10, t, r, n, i = this, o = i.constructor;
  if (!i.isFinite() || i.isZero()) return new o(i);
  if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3) i = Tt(o, 2, i, i, true);
  else {
    e10 = 1.4 * Math.sqrt(n), e10 = e10 > 16 ? 16 : e10 | 0, i = i.times(1 / dn(5, e10)), i = Tt(o, 2, i, i, true);
    for (var s, a = new o(5), l = new o(16), u = new o(20); e10--; ) s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
  }
  return o.precision = t, o.rounding = r, y(i, t, r, true);
};
m.hyperbolicTangent = m.tanh = function() {
  var e10, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e10 = n.precision, t = n.rounding, n.precision = e10 + 7, n.rounding = 1, N(r.sinh(), r.cosh(), n.precision = e10, n.rounding = t)) : new n(r.s);
};
m.inverseCosine = m.acos = function() {
  var e10, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding;
  return n !== -1 ? n === 0 ? t.isNeg() ? ge(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? ge(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e10 = ge(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e10.minus(t));
};
m.inverseHyperbolicCosine = m.acosh = function() {
  var e10, t, r = this, n = r.constructor;
  return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e10 = n.precision, t = n.rounding, n.precision = e10 + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, x = false, r = r.times(r).minus(1).sqrt().plus(r), x = true, n.precision = e10, n.rounding = t, r.ln()) : new n(r);
};
m.inverseHyperbolicSine = m.asinh = function() {
  var e10, t, r = this, n = r.constructor;
  return !r.isFinite() || r.isZero() ? new n(r) : (e10 = n.precision, t = n.rounding, n.precision = e10 + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, x = false, r = r.times(r).plus(1).sqrt().plus(r), x = true, n.precision = e10, n.rounding = t, r.ln());
};
m.inverseHyperbolicTangent = m.atanh = function() {
  var e10, t, r, n, i = this, o = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e10 = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e10) < 2 * -i.e - 1 ? y(new o(i), e10, t, true) : (o.precision = r = n - i.e, i = N(i.plus(1), new o(1).minus(i), r + e10, 1), o.precision = e10 + 4, o.rounding = 1, i = i.ln(), o.precision = e10, o.rounding = t, i.times(0.5))) : new o(NaN);
};
m.inverseSine = m.asin = function() {
  var e10, t, r, n, i = this, o = i.constructor;
  return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e10 = ge(o, r + 4, n).times(0.5), e10.s = i.s, e10) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
};
m.inverseTangent = m.atan = function() {
  var e10, t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding;
  if (u.isFinite()) {
    if (u.isZero()) return new c(u);
    if (u.abs().eq(1) && p + 4 <= Di) return s = ge(c, p + 4, d).times(0.25), s.s = u.s, s;
  } else {
    if (!u.s) return new c(NaN);
    if (p + 4 <= Di) return s = ge(c, p + 4, d).times(0.5), s.s = u.s, s;
  }
  for (c.precision = a = p + 10, c.rounding = 1, r = Math.min(28, a / b + 2 | 0), e10 = r; e10; --e10) u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (x = false, t = Math.ceil(a / b), n = 1, l = u.times(u), s = new c(u), i = u; e10 !== -1; ) if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== void 0) for (e10 = t; s.d[e10] === o.d[e10] && e10--; ) ;
  return r && (s = s.times(2 << r - 1)), x = true, y(s, c.precision = p, c.rounding = d, true);
};
m.isFinite = function() {
  return !!this.d;
};
m.isInteger = m.isInt = function() {
  return !!this.d && ee(this.e / b) > this.d.length - 2;
};
m.isNaN = function() {
  return !this.s;
};
m.isNegative = m.isNeg = function() {
  return this.s < 0;
};
m.isPositive = m.isPos = function() {
  return this.s > 0;
};
m.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
m.lessThan = m.lt = function(e10) {
  return this.cmp(e10) < 0;
};
m.lessThanOrEqualTo = m.lte = function(e10) {
  return this.cmp(e10) < 1;
};
m.logarithm = m.log = function(e10) {
  var t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding, f = 5;
  if (e10 == null) e10 = new c(10), t = true;
  else {
    if (e10 = new c(e10), r = e10.d, e10.s < 0 || !r || !r[0] || e10.eq(1)) return new c(NaN);
    t = e10.eq(10);
  }
  if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1)) return new c(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (t) if (r.length > 1) o = true;
  else {
    for (i = r[0]; i % 10 === 0; ) i /= 10;
    o = i !== 1;
  }
  if (x = false, a = p + f, s = He(u, a), n = t ? un(c, a + 10) : He(e10, a), l = N(s, n, a, 1), ur(l.d, i = p, d)) do
    if (a += 10, s = He(u, a), n = t ? un(c, a + 10) : He(e10, a), l = N(s, n, a, 1), !o) {
      +K(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = y(l, p + 1, 0));
      break;
    }
  while (ur(l.d, i += 10, d));
  return x = true, y(l, p, d);
};
m.minus = m.sub = function(e10) {
  var t, r, n, i, o, s, a, l, u, c, p, d, f = this, g = f.constructor;
  if (e10 = new g(e10), !f.d || !e10.d) return !f.s || !e10.s ? e10 = new g(NaN) : f.d ? e10.s = -e10.s : e10 = new g(e10.d || f.s !== e10.s ? f : NaN), e10;
  if (f.s != e10.s) return e10.s = -e10.s, f.plus(e10);
  if (u = f.d, d = e10.d, a = g.precision, l = g.rounding, !u[0] || !d[0]) {
    if (d[0]) e10.s = -e10.s;
    else if (u[0]) e10 = new g(f);
    else return new g(l === 3 ? -0 : 0);
    return x ? y(e10, a, l) : e10;
  }
  if (r = ee(e10.e / b), c = ee(f.e / b), u = u.slice(), o = c - r, o) {
    for (p = o < 0, p ? (t = u, o = -o, s = d.length) : (t = d, r = c, s = u.length), n = Math.max(Math.ceil(a / b), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--; ) t.push(0);
    t.reverse();
  } else {
    for (n = u.length, s = d.length, p = n < s, p && (s = n), n = 0; n < s; n++) if (u[n] != d[n]) {
      p = u[n] < d[n];
      break;
    }
    o = 0;
  }
  for (p && (t = u, u = d, d = t, e10.s = -e10.s), s = u.length, n = d.length - s; n > 0; --n) u[s++] = 0;
  for (n = d.length; n > o; ) {
    if (u[--n] < d[n]) {
      for (i = n; i && u[--i] === 0; ) u[i] = he - 1;
      --u[i], u[n] += he;
    }
    u[n] -= d[n];
  }
  for (; u[--s] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --r;
  return u[0] ? (e10.d = u, e10.e = pn(u, r), x ? y(e10, a, l) : e10) : new g(l === 3 ? -0 : 0);
};
m.modulo = m.mod = function(e10) {
  var t, r = this, n = r.constructor;
  return e10 = new n(e10), !r.d || !e10.s || e10.d && !e10.d[0] ? new n(NaN) : !e10.d || r.d && !r.d[0] ? y(new n(r), n.precision, n.rounding) : (x = false, n.modulo == 9 ? (t = N(r, e10.abs(), 0, 3, 1), t.s *= e10.s) : t = N(r, e10, 0, n.modulo, 1), t = t.times(e10), x = true, r.minus(t));
};
m.naturalExponential = m.exp = function() {
  return _i(this);
};
m.naturalLogarithm = m.ln = function() {
  return He(this);
};
m.negated = m.neg = function() {
  var e10 = new this.constructor(this);
  return e10.s = -e10.s, y(e10);
};
m.plus = m.add = function(e10) {
  var t, r, n, i, o, s, a, l, u, c, p = this, d = p.constructor;
  if (e10 = new d(e10), !p.d || !e10.d) return !p.s || !e10.s ? e10 = new d(NaN) : p.d || (e10 = new d(e10.d || p.s === e10.s ? p : NaN)), e10;
  if (p.s != e10.s) return e10.s = -e10.s, p.minus(e10);
  if (u = p.d, c = e10.d, a = d.precision, l = d.rounding, !u[0] || !c[0]) return c[0] || (e10 = new d(p)), x ? y(e10, a, l) : e10;
  if (o = ee(p.e / b), n = ee(e10.e / b), u = u.slice(), i = o - n, i) {
    for (i < 0 ? (r = u, i = -i, s = c.length) : (r = c, n = o, s = u.length), o = Math.ceil(a / b), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--; ) r.push(0);
    r.reverse();
  }
  for (s = u.length, i = c.length, s - i < 0 && (i = s, r = c, c = u, u = r), t = 0; i; ) t = (u[--i] = u[i] + c[i] + t) / he | 0, u[i] %= he;
  for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0; ) u.pop();
  return e10.d = u, e10.e = pn(u, n), x ? y(e10, a, l) : e10;
};
m.precision = m.sd = function(e10) {
  var t, r = this;
  if (e10 !== void 0 && e10 !== !!e10 && e10 !== 1 && e10 !== 0) throw Error(Ke + e10);
  return r.d ? (t = Ds(r.d), e10 && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
};
m.round = function() {
  var e10 = this, t = e10.constructor;
  return y(new t(e10), e10.e + 1, t.rounding);
};
m.sine = m.sin = function() {
  var e10, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e10 = n.precision, t = n.rounding, n.precision = e10 + Math.max(r.e, r.sd()) + b, n.rounding = 1, r = Sc(n, Ns(n, r)), n.precision = e10, n.rounding = t, y(Me > 2 ? r.neg() : r, e10, t, true)) : new n(NaN);
};
m.squareRoot = m.sqrt = function() {
  var e10, t, r, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
  if (u !== 1 || !a || !a[0]) return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
  for (x = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (t = K(a), (t.length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = ee((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t = "5e" + l : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), n = new c(t)) : n = new c(u.toString()), r = (l = c.precision) + 3; ; ) if (o = n, n = o.plus(N(s, o, r + 2, 1)).times(0.5), K(o.d).slice(0, r) === (t = K(n.d)).slice(0, r)) if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
    if (!i && (y(o, l + 1, 0), o.times(o).eq(s))) {
      n = o;
      break;
    }
    r += 4, i = 1;
  } else {
    (!+t || !+t.slice(1) && t.charAt(0) == "5") && (y(n, l + 1, 1), e10 = !n.times(n).eq(s));
    break;
  }
  return x = true, y(n, l, c.rounding, e10);
};
m.tangent = m.tan = function() {
  var e10, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e10 = n.precision, t = n.rounding, n.precision = e10 + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = N(r, new n(1).minus(r.times(r)).sqrt(), e10 + 10, 0), n.precision = e10, n.rounding = t, y(Me == 2 || Me == 4 ? r.neg() : r, e10, t, true)) : new n(NaN);
};
m.times = m.mul = function(e10) {
  var t, r, n, i, o, s, a, l, u, c = this, p = c.constructor, d = c.d, f = (e10 = new p(e10)).d;
  if (e10.s *= c.s, !d || !d[0] || !f || !f[0]) return new p(!e10.s || d && !d[0] && !f || f && !f[0] && !d ? NaN : !d || !f ? e10.s / 0 : e10.s * 0);
  for (r = ee(c.e / b) + ee(e10.e / b), l = d.length, u = f.length, l < u && (o = d, d = f, f = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--; ) o.push(0);
  for (n = u; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; ) a = o[i] + f[n] * d[i - n - 1] + t, o[i--] = a % he | 0, t = a / he | 0;
    o[i] = (o[i] + t) % he | 0;
  }
  for (; !o[--s]; ) o.pop();
  return t ? ++r : o.shift(), e10.d = o, e10.e = pn(o, r), x ? y(e10, p.precision, p.rounding) : e10;
};
m.toBinary = function(e10, t) {
  return Li(this, 2, e10, t);
};
m.toDecimalPlaces = m.toDP = function(e10, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e10 === void 0 ? r : (oe(e10, 0, ze), t === void 0 ? t = n.rounding : oe(t, 0, 8), y(r, e10 + r.e + 1, t));
};
m.toExponential = function(e10, t) {
  var r, n = this, i = n.constructor;
  return e10 === void 0 ? r = Te(n, true) : (oe(e10, 0, ze), t === void 0 ? t = i.rounding : oe(t, 0, 8), n = y(new i(n), e10 + 1, t), r = Te(n, true, e10 + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
};
m.toFixed = function(e10, t) {
  var r, n, i = this, o = i.constructor;
  return e10 === void 0 ? r = Te(i) : (oe(e10, 0, ze), t === void 0 ? t = o.rounding : oe(t, 0, 8), n = y(new o(i), e10 + i.e + 1, t), r = Te(n, false, e10 + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
};
m.toFraction = function(e10) {
  var t, r, n, i, o, s, a, l, u, c, p, d, f = this, g = f.d, h = f.constructor;
  if (!g) return new h(f);
  if (u = r = new h(1), n = l = new h(0), t = new h(n), o = t.e = Ds(g) - f.e - 1, s = o % b, t.d[0] = G(10, s < 0 ? b + s : s), e10 == null) e10 = o > 0 ? t : u;
  else {
    if (a = new h(e10), !a.isInt() || a.lt(u)) throw Error(Ke + a);
    e10 = a.gt(t) ? o > 0 ? t : u : a;
  }
  for (x = false, a = new h(K(g)), c = h.precision, h.precision = o = g.length * b * 2; p = N(a, t, 0, 1, 1), i = r.plus(p.times(n)), i.cmp(e10) != 1; ) r = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = t, t = a.minus(p.times(i)), a = i;
  return i = N(e10.minus(r), n, 0, 1, 1), l = l.plus(i.times(u)), r = r.plus(i.times(n)), l.s = u.s = f.s, d = N(u, n, o, 1).minus(f).abs().cmp(N(l, r, o, 1).minus(f).abs()) < 1 ? [u, n] : [l, r], h.precision = c, x = true, d;
};
m.toHexadecimal = m.toHex = function(e10, t) {
  return Li(this, 16, e10, t);
};
m.toNearest = function(e10, t) {
  var r = this, n = r.constructor;
  if (r = new n(r), e10 == null) {
    if (!r.d) return r;
    e10 = new n(1), t = n.rounding;
  } else {
    if (e10 = new n(e10), t === void 0 ? t = n.rounding : oe(t, 0, 8), !r.d) return e10.s ? r : e10;
    if (!e10.d) return e10.s && (e10.s = r.s), e10;
  }
  return e10.d[0] ? (x = false, r = N(r, e10, 0, t, 1).times(e10), x = true, y(r)) : (e10.s = r.s, r = e10), r;
};
m.toNumber = function() {
  return +this;
};
m.toOctal = function(e10, t) {
  return Li(this, 8, e10, t);
};
m.toPower = m.pow = function(e10) {
  var t, r, n, i, o, s, a = this, l = a.constructor, u = +(e10 = new l(e10));
  if (!a.d || !e10.d || !a.d[0] || !e10.d[0]) return new l(G(+a, u));
  if (a = new l(a), a.eq(1)) return a;
  if (n = l.precision, o = l.rounding, e10.eq(1)) return y(a, n, o);
  if (t = ee(e10.e / b), t >= e10.d.length - 1 && (r = u < 0 ? -u : u) <= vc) return i = _s(l, a, r, n), e10.s < 0 ? new l(1).div(i) : y(i, n, o);
  if (s = a.s, s < 0) {
    if (t < e10.d.length - 1) return new l(NaN);
    if (e10.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1) return a.s = s, a;
  }
  return r = G(+a, u), t = r == 0 || !isFinite(r) ? ee(u * (Math.log("0." + K(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (x = false, l.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = _i(e10.times(He(a, n + r)), n), i.d && (i = y(i, n + 5, 1), ur(i.d, n, o) && (t = n + 10, i = y(_i(e10.times(He(a, t + r)), t), t + 5, 1), +K(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = y(i, n + 1, 0)))), i.s = s, x = true, l.rounding = o, y(i, n, o));
};
m.toPrecision = function(e10, t) {
  var r, n = this, i = n.constructor;
  return e10 === void 0 ? r = Te(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (oe(e10, 1, ze), t === void 0 ? t = i.rounding : oe(t, 0, 8), n = y(new i(n), e10, t), r = Te(n, e10 <= n.e || n.e <= i.toExpNeg, e10)), n.isNeg() && !n.isZero() ? "-" + r : r;
};
m.toSignificantDigits = m.toSD = function(e10, t) {
  var r = this, n = r.constructor;
  return e10 === void 0 ? (e10 = n.precision, t = n.rounding) : (oe(e10, 1, ze), t === void 0 ? t = n.rounding : oe(t, 0, 8)), y(new n(r), e10, t);
};
m.toString = function() {
  var e10 = this, t = e10.constructor, r = Te(e10, e10.e <= t.toExpNeg || e10.e >= t.toExpPos);
  return e10.isNeg() && !e10.isZero() ? "-" + r : r;
};
m.truncated = m.trunc = function() {
  return y(new this.constructor(this), this.e + 1, 1);
};
m.valueOf = m.toJSON = function() {
  var e10 = this, t = e10.constructor, r = Te(e10, e10.e <= t.toExpNeg || e10.e >= t.toExpPos);
  return e10.isNeg() ? "-" + r : r;
};
function K(e10) {
  var t, r, n, i = e10.length - 1, o = "", s = e10[0];
  if (i > 0) {
    for (o += s, t = 1; t < i; t++) n = e10[t] + "", r = b - n.length, r && (o += We(r)), o += n;
    s = e10[t], n = s + "", r = b - n.length, r && (o += We(r));
  } else if (s === 0) return "0";
  for (; s % 10 === 0; ) s /= 10;
  return o + s;
}
function oe(e10, t, r) {
  if (e10 !== ~~e10 || e10 < t || e10 > r) throw Error(Ke + e10);
}
function ur(e10, t, r, n) {
  var i, o, s, a;
  for (o = e10[0]; o >= 10; o /= 10) --t;
  return --t < 0 ? (t += b, i = 0) : (i = Math.ceil((t + 1) / b), t %= b), o = G(10, b - t), a = e10[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e10[i + 1] / o / 100 | 0) == G(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e10[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e10[i + 1] / o / 1e3 | 0) == G(10, t - 3) - 1, s;
}
function sn(e10, t, r) {
  for (var n, i = [0], o, s = 0, a = e10.length; s < a; ) {
    for (o = i.length; o--; ) i[o] *= t;
    for (i[0] += Oi.indexOf(e10.charAt(s++)), n = 0; n < i.length; n++) i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
  }
  return i.reverse();
}
function Rc(e10, t) {
  var r, n, i;
  if (t.isZero()) return t;
  n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / dn(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e10.precision += r, t = Tt(e10, 1, t.times(i), new e10(1));
  for (var o = r; o--; ) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
  }
  return e10.precision -= r, t;
}
var N = /* @__PURE__ */ function() {
  function e10(n, i, o) {
    var s, a = 0, l = n.length;
    for (n = n.slice(); l--; ) s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
    return a && n.unshift(a), n;
  }
  function t(n, i, o, s) {
    var a, l;
    if (o != s) l = o > s ? 1 : -1;
    else for (a = l = 0; a < o; a++) if (n[a] != i[a]) {
      l = n[a] > i[a] ? 1 : -1;
      break;
    }
    return l;
  }
  function r(n, i, o, s) {
    for (var a = 0; o--; ) n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, o, s, a, l) {
    var u, c, p, d, f, g, h, O, T, S, C, E, me, ae, jt, U, ne, Ie, z, dt, Fr = n.constructor, $n = n.s == i.s ? 1 : -1, Y = n.d, _ = i.d;
    if (!Y || !Y[0] || !_ || !_[0]) return new Fr(!n.s || !i.s || (Y ? _ && Y[0] == _[0] : !_) ? NaN : Y && Y[0] == 0 || !_ ? $n * 0 : $n / 0);
    for (l ? (f = 1, c = n.e - i.e) : (l = he, f = b, c = ee(n.e / f) - ee(i.e / f)), z = _.length, ne = Y.length, T = new Fr($n), S = T.d = [], p = 0; _[p] == (Y[p] || 0); p++) ;
    if (_[p] > (Y[p] || 0) && c--, o == null ? (ae = o = Fr.precision, s = Fr.rounding) : a ? ae = o + (n.e - i.e) + 1 : ae = o, ae < 0) S.push(1), g = true;
    else {
      if (ae = ae / f + 2 | 0, p = 0, z == 1) {
        for (d = 0, _ = _[0], ae++; (p < ne || d) && ae--; p++) jt = d * l + (Y[p] || 0), S[p] = jt / _ | 0, d = jt % _ | 0;
        g = d || p < ne;
      } else {
        for (d = l / (_[0] + 1) | 0, d > 1 && (_ = e10(_, d, l), Y = e10(Y, d, l), z = _.length, ne = Y.length), U = z, C = Y.slice(0, z), E = C.length; E < z; ) C[E++] = 0;
        dt = _.slice(), dt.unshift(0), Ie = _[0], _[1] >= l / 2 && ++Ie;
        do
          d = 0, u = t(_, C, z, E), u < 0 ? (me = C[0], z != E && (me = me * l + (C[1] || 0)), d = me / Ie | 0, d > 1 ? (d >= l && (d = l - 1), h = e10(_, d, l), O = h.length, E = C.length, u = t(h, C, O, E), u == 1 && (d--, r(h, z < O ? dt : _, O, l))) : (d == 0 && (u = d = 1), h = _.slice()), O = h.length, O < E && h.unshift(0), r(C, h, E, l), u == -1 && (E = C.length, u = t(_, C, z, E), u < 1 && (d++, r(C, z < E ? dt : _, E, l))), E = C.length) : u === 0 && (d++, C = [0]), S[p++] = d, u && C[0] ? C[E++] = Y[U] || 0 : (C = [Y[U]], E = 1);
        while ((U++ < ne || C[0] !== void 0) && ae--);
        g = C[0] !== void 0;
      }
      S[0] || S.shift();
    }
    if (f == 1) T.e = c, Ss = g;
    else {
      for (p = 1, d = S[0]; d >= 10; d /= 10) p++;
      T.e = p + c * f - 1, y(T, a ? o + T.e + 1 : o, s, g);
    }
    return T;
  };
}();
function y(e10, t, r, n) {
  var i, o, s, a, l, u, c, p, d, f = e10.constructor;
  e: if (t != null) {
    if (p = e10.d, !p) return e10;
    for (i = 1, a = p[0]; a >= 10; a /= 10) i++;
    if (o = t - i, o < 0) o += b, s = t, c = p[d = 0], l = c / G(10, i - s - 1) % 10 | 0;
    else if (d = Math.ceil((o + 1) / b), a = p.length, d >= a) if (n) {
      for (; a++ <= d; ) p.push(0);
      c = l = 0, i = 1, o %= b, s = o - b + 1;
    } else break e;
    else {
      for (c = a = p[d], i = 1; a >= 10; a /= 10) i++;
      o %= b, s = o - b + i, l = s < 0 ? 0 : c / G(10, i - s - 1) % 10 | 0;
    }
    if (n = n || t < 0 || p[d + 1] !== void 0 || (s < 0 ? c : c % G(10, i - s - 1)), u = r < 4 ? (l || n) && (r == 0 || r == (e10.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? c / G(10, i - s) : 0 : p[d - 1]) % 10 & 1 || r == (e10.s < 0 ? 8 : 7)), t < 1 || !p[0]) return p.length = 0, u ? (t -= e10.e + 1, p[0] = G(10, (b - t % b) % b), e10.e = -t || 0) : p[0] = e10.e = 0, e10;
    if (o == 0 ? (p.length = d, a = 1, d--) : (p.length = d + 1, a = G(10, b - o), p[d] = s > 0 ? (c / G(10, i - s) % G(10, s) | 0) * a : 0), u) for (; ; ) if (d == 0) {
      for (o = 1, s = p[0]; s >= 10; s /= 10) o++;
      for (s = p[0] += a, a = 1; s >= 10; s /= 10) a++;
      o != a && (e10.e++, p[0] == he && (p[0] = 1));
      break;
    } else {
      if (p[d] += a, p[d] != he) break;
      p[d--] = 0, a = 1;
    }
    for (o = p.length; p[--o] === 0; ) p.pop();
  }
  return x && (e10.e > f.maxE ? (e10.d = null, e10.e = NaN) : e10.e < f.minE && (e10.e = 0, e10.d = [0])), e10;
}
function Te(e10, t, r) {
  if (!e10.isFinite()) return Ls(e10);
  var n, i = e10.e, o = K(e10.d), s = o.length;
  return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + We(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e10.e < 0 ? "e" : "e+") + e10.e) : i < 0 ? (o = "0." + We(-i - 1) + o, r && (n = r - s) > 0 && (o += We(n))) : i >= s ? (o += We(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + We(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += We(n))), o;
}
function pn(e10, t) {
  var r = e10[0];
  for (t *= b; r >= 10; r /= 10) t++;
  return t;
}
function un(e10, t, r) {
  if (t > Tc) throw x = true, r && (e10.precision = r), Error(As);
  return y(new e10(an), t, 1, true);
}
function ge(e10, t, r) {
  if (t > Di) throw Error(As);
  return y(new e10(ln), t, r, true);
}
function Ds(e10) {
  var t = e10.length - 1, r = t * b + 1;
  if (t = e10[t], t) {
    for (; t % 10 == 0; t /= 10) r--;
    for (t = e10[0]; t >= 10; t /= 10) r++;
  }
  return r;
}
function We(e10) {
  for (var t = ""; e10--; ) t += "0";
  return t;
}
function _s(e10, t, r, n) {
  var i, o = new e10(1), s = Math.ceil(n / b + 4);
  for (x = false; ; ) {
    if (r % 2 && (o = o.times(t), Rs(o.d, s) && (i = true)), r = ee(r / 2), r === 0) {
      r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
      break;
    }
    t = t.times(t), Rs(t.d, s);
  }
  return x = true, o;
}
function Ts(e10) {
  return e10.d[e10.d.length - 1] & 1;
}
function Fs(e10, t, r) {
  for (var n, i = new e10(t[0]), o = 0; ++o < t.length; ) if (n = new e10(t[o]), n.s) i[r](n) && (i = n);
  else {
    i = n;
    break;
  }
  return i;
}
function _i(e10, t) {
  var r, n, i, o, s, a, l, u = 0, c = 0, p = 0, d = e10.constructor, f = d.rounding, g = d.precision;
  if (!e10.d || !e10.d[0] || e10.e > 17) return new d(e10.d ? e10.d[0] ? e10.s < 0 ? 0 : 1 / 0 : 1 : e10.s ? e10.s < 0 ? 0 : e10 : NaN);
  for (t == null ? (x = false, l = g) : l = t, a = new d(0.03125); e10.e > -2; ) e10 = e10.times(a), p += 5;
  for (n = Math.log(G(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new d(1), d.precision = l; ; ) {
    if (o = y(o.times(e10), l, 1), r = r.times(++c), a = s.plus(N(o, r, l, 1)), K(a.d).slice(0, l) === K(s.d).slice(0, l)) {
      for (i = p; i--; ) s = y(s.times(s), l, 1);
      if (t == null) if (u < 3 && ur(s.d, l - n, f, u)) d.precision = l += 10, r = o = a = new d(1), c = 0, u++;
      else return y(s, d.precision = g, f, x = true);
      else return d.precision = g, s;
    }
    s = a;
  }
}
function He(e10, t) {
  var r, n, i, o, s, a, l, u, c, p, d, f = 1, g = 10, h = e10, O = h.d, T = h.constructor, S = T.rounding, C = T.precision;
  if (h.s < 0 || !O || !O[0] || !h.e && O[0] == 1 && O.length == 1) return new T(O && !O[0] ? -1 / 0 : h.s != 1 ? NaN : O ? 0 : h);
  if (t == null ? (x = false, c = C) : c = t, T.precision = c += g, r = K(O), n = r.charAt(0), Math.abs(o = h.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) h = h.times(e10), r = K(h.d), n = r.charAt(0), f++;
    o = h.e, n > 1 ? (h = new T("0." + r), o++) : h = new T(n + "." + r.slice(1));
  } else return u = un(T, c + 2, C).times(o + ""), h = He(new T(n + "." + r.slice(1)), c - g).plus(u), T.precision = C, t == null ? y(h, C, S, x = true) : h;
  for (p = h, l = s = h = N(h.minus(1), h.plus(1), c, 1), d = y(h.times(h), c, 1), i = 3; ; ) {
    if (s = y(s.times(d), c, 1), u = l.plus(N(s, new T(i), c, 1)), K(u.d).slice(0, c) === K(l.d).slice(0, c)) if (l = l.times(2), o !== 0 && (l = l.plus(un(T, c + 2, C).times(o + ""))), l = N(l, new T(f), c, 1), t == null) if (ur(l.d, c - g, S, a)) T.precision = c += g, u = s = h = N(p.minus(1), p.plus(1), c, 1), d = y(h.times(h), c, 1), i = a = 1;
    else return y(l, T.precision = C, S, x = true);
    else return T.precision = C, l;
    l = u, i += 2;
  }
}
function Ls(e10) {
  return String(e10.s * e10.s / 0);
}
function Fi(e10, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++) ;
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i) ;
  if (t = t.slice(n, i), t) {
    if (i -= n, e10.e = r = r - n - 1, e10.d = [], n = (r + 1) % b, r < 0 && (n += b), n < i) {
      for (n && e10.d.push(+t.slice(0, n)), i -= b; n < i; ) e10.d.push(+t.slice(n, n += b));
      t = t.slice(n), n = b - t.length;
    } else n -= i;
    for (; n--; ) t += "0";
    e10.d.push(+t), x && (e10.e > e10.constructor.maxE ? (e10.d = null, e10.e = NaN) : e10.e < e10.constructor.minE && (e10.e = 0, e10.d = [0]));
  } else e10.e = 0, e10.d = [0];
  return e10;
}
function Cc(e10, t) {
  var r, n, i, o, s, a, l, u, c;
  if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), ks.test(t)) return Fi(e10, t);
  } else if (t === "Infinity" || t === "NaN") return +t || (e10.s = NaN), e10.e = NaN, e10.d = null, e10;
  if (xc.test(t)) r = 16, t = t.toLowerCase();
  else if (wc.test(t)) r = 2;
  else if (Pc.test(t)) r = 8;
  else throw Error(Ke + t);
  for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e10.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = _s(n, new n(r), o, o * 2)), u = sn(t, r, he), c = u.length - 1, o = c; u[o] === 0; --o) u.pop();
  return o < 0 ? new n(e10.s * 0) : (e10.e = pn(u, c), e10.d = u, x = false, s && (e10 = N(e10, i, a * 4)), l && (e10 = e10.times(Math.abs(l) < 54 ? G(2, l) : ot.pow(2, l))), x = true, e10);
}
function Sc(e10, t) {
  var r, n = t.d.length;
  if (n < 3) return t.isZero() ? t : Tt(e10, 2, t, t);
  r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / dn(5, r)), t = Tt(e10, 2, t, t);
  for (var i, o = new e10(5), s = new e10(16), a = new e10(20); r--; ) i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
  return t;
}
function Tt(e10, t, r, n, i) {
  var o, s, a, l, c = e10.precision, p = Math.ceil(c / b);
  for (x = false, l = r.times(r), a = new e10(n); ; ) {
    if (s = N(a.times(l), new e10(t++ * t++), c, 1), a = i ? n.plus(s) : n.minus(s), n = N(s.times(l), new e10(t++ * t++), c, 1), s = a.plus(n), s.d[p] !== void 0) {
      for (o = p; s.d[o] === a.d[o] && o--; ) ;
      if (o == -1) break;
    }
    o = a, a = n, n = s, s = o;
  }
  return x = true, s.d.length = p + 1, s;
}
function dn(e10, t) {
  for (var r = e10; --t; ) r *= e10;
  return r;
}
function Ns(e10, t) {
  var r, n = t.s < 0, i = ge(e10, e10.precision, 1), o = i.times(0.5);
  if (t = t.abs(), t.lte(o)) return Me = n ? 4 : 1, t;
  if (r = t.divToInt(i), r.isZero()) Me = n ? 3 : 2;
  else {
    if (t = t.minus(r.times(i)), t.lte(o)) return Me = Ts(r) ? n ? 2 : 3 : n ? 4 : 1, t;
    Me = Ts(r) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return t.minus(i).abs();
}
function Li(e10, t, r, n) {
  var i, o, s, a, l, u, c, p, d, f = e10.constructor, g = r !== void 0;
  if (g ? (oe(r, 1, ze), n === void 0 ? n = f.rounding : oe(n, 0, 8)) : (r = f.precision, n = f.rounding), !e10.isFinite()) c = Ls(e10);
  else {
    for (c = Te(e10), s = c.indexOf("."), g ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (c = c.replace(".", ""), d = new f(1), d.e = c.length - s, d.d = sn(Te(d), 10, i), d.e = d.d.length), p = sn(c, 10, i), o = l = p.length; p[--l] == 0; ) p.pop();
    if (!p[0]) c = g ? "0p+0" : "0";
    else {
      if (s < 0 ? o-- : (e10 = new f(e10), e10.d = p, e10.e = o, e10 = N(e10, d, r, n, 0, i), p = e10.d, o = e10.e, u = Ss), s = p[r], a = i / 2, u = u || p[r + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e10.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[r - 1] & 1 || n === (e10.s < 0 ? 8 : 7)), p.length = r, u) for (; ++p[--r] > i - 1; ) p[r] = 0, r || (++o, p.unshift(1));
      for (l = p.length; !p[l - 1]; --l) ;
      for (s = 0, c = ""; s < l; s++) c += Oi.charAt(p[s]);
      if (g) {
        if (l > 1) if (t == 16 || t == 8) {
          for (s = t == 16 ? 4 : 3, --l; l % s; l++) c += "0";
          for (p = sn(c, i, t), l = p.length; !p[l - 1]; --l) ;
          for (s = 1, c = "1."; s < l; s++) c += Oi.charAt(p[s]);
        } else c = c.charAt(0) + "." + c.slice(1);
        c = c + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; ) c = "0" + c;
        c = "0." + c;
      } else if (++o > l) for (o -= l; o--; ) c += "0";
      else o < l && (c = c.slice(0, o) + "." + c.slice(o));
    }
    c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
  }
  return e10.s < 0 ? "-" + c : c;
}
function Rs(e10, t) {
  if (e10.length > t) return e10.length = t, true;
}
function Ac(e10) {
  return new this(e10).abs();
}
function Ic(e10) {
  return new this(e10).acos();
}
function Oc(e10) {
  return new this(e10).acosh();
}
function kc(e10, t) {
  return new this(e10).plus(t);
}
function Dc(e10) {
  return new this(e10).asin();
}
function _c(e10) {
  return new this(e10).asinh();
}
function Fc(e10) {
  return new this(e10).atan();
}
function Lc(e10) {
  return new this(e10).atanh();
}
function Nc(e10, t) {
  e10 = new this(e10), t = new this(t);
  var r, n = this.precision, i = this.rounding, o = n + 4;
  return !e10.s || !t.s ? r = new this(NaN) : !e10.d && !t.d ? (r = ge(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e10.s) : !t.d || e10.isZero() ? (r = t.s < 0 ? ge(this, n, i) : new this(0), r.s = e10.s) : !e10.d || t.isZero() ? (r = ge(this, o, 1).times(0.5), r.s = e10.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(N(e10, t, o, 1)), t = ge(this, o, 1), this.precision = n, this.rounding = i, r = e10.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(N(e10, t, o, 1)), r;
}
function Mc(e10) {
  return new this(e10).cbrt();
}
function $c(e10) {
  return y(e10 = new this(e10), e10.e + 1, 2);
}
function qc(e10, t, r) {
  return new this(e10).clamp(t, r);
}
function jc(e10) {
  if (!e10 || typeof e10 != "object") throw Error(cn + "Object expected");
  var t, r, n, i = e10.defaults === true, o = ["precision", 1, ze, "rounding", 0, 8, "toExpNeg", -vt, 0, "toExpPos", 0, vt, "maxE", 0, vt, "minE", -vt, 0, "modulo", 0, 9];
  for (t = 0; t < o.length; t += 3) if (r = o[t], i && (this[r] = ki[r]), (n = e10[r]) !== void 0) if (ee(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
  else throw Error(Ke + r + ": " + n);
  if (r = "crypto", i && (this[r] = ki[r]), (n = e10[r]) !== void 0) if (n === true || n === false || n === 0 || n === 1) if (n) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[r] = true;
  else throw Error(Is);
  else this[r] = false;
  else throw Error(Ke + r + ": " + n);
  return this;
}
function Vc(e10) {
  return new this(e10).cos();
}
function Bc(e10) {
  return new this(e10).cosh();
}
function Ms(e10) {
  var t, r, n;
  function i(o) {
    var s, a, l, u = this;
    if (!(u instanceof i)) return new i(o);
    if (u.constructor = i, Cs(o)) {
      u.s = o.s, x ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (l = typeof o, l === "number") {
      if (o === 0) {
        u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
        for (s = 0, a = o; a >= 10; a /= 10) s++;
        x ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Fi(u, o.toString());
    } else if (l !== "string") throw Error(Ke + o);
    return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), ks.test(o) ? Fi(u, o) : Cc(u, o);
  }
  if (i.prototype = m, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = jc, i.clone = Ms, i.isDecimal = Cs, i.abs = Ac, i.acos = Ic, i.acosh = Oc, i.add = kc, i.asin = Dc, i.asinh = _c, i.atan = Fc, i.atanh = Lc, i.atan2 = Nc, i.cbrt = Mc, i.ceil = $c, i.clamp = qc, i.cos = Vc, i.cosh = Bc, i.div = Uc, i.exp = Gc, i.floor = Qc, i.hypot = Jc, i.ln = Wc, i.log = Hc, i.log10 = zc, i.log2 = Kc, i.max = Yc, i.min = Zc, i.mod = Xc, i.mul = ep, i.pow = tp, i.random = rp, i.round = np, i.sign = ip, i.sin = op, i.sinh = sp, i.sqrt = ap, i.sub = lp, i.sum = up, i.tan = cp, i.tanh = pp, i.trunc = dp, e10 === void 0 && (e10 = {}), e10 && e10.defaults !== true) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; ) e10.hasOwnProperty(r = n[t++]) || (e10[r] = this[r]);
  return i.config(e10), i;
}
function Uc(e10, t) {
  return new this(e10).div(t);
}
function Gc(e10) {
  return new this(e10).exp();
}
function Qc(e10) {
  return y(e10 = new this(e10), e10.e + 1, 3);
}
function Jc() {
  var e10, t, r = new this(0);
  for (x = false, e10 = 0; e10 < arguments.length; ) if (t = new this(arguments[e10++]), t.d) r.d && (r = r.plus(t.times(t)));
  else {
    if (t.s) return x = true, new this(1 / 0);
    r = t;
  }
  return x = true, r.sqrt();
}
function Cs(e10) {
  return e10 instanceof ot || e10 && e10.toStringTag === Os || false;
}
function Wc(e10) {
  return new this(e10).ln();
}
function Hc(e10, t) {
  return new this(e10).log(t);
}
function Kc(e10) {
  return new this(e10).log(2);
}
function zc(e10) {
  return new this(e10).log(10);
}
function Yc() {
  return Fs(this, arguments, "lt");
}
function Zc() {
  return Fs(this, arguments, "gt");
}
function Xc(e10, t) {
  return new this(e10).mod(t);
}
function ep(e10, t) {
  return new this(e10).mul(t);
}
function tp(e10, t) {
  return new this(e10).pow(t);
}
function rp(e10) {
  var t, r, n, i, o = 0, s = new this(1), a = [];
  if (e10 === void 0 ? e10 = this.precision : oe(e10, 1, ze), n = Math.ceil(e10 / b), this.crypto) if (crypto.getRandomValues) for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; ) i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
  else if (crypto.randomBytes) {
    for (t = crypto.randomBytes(n *= 4); o < n; ) i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
    o = n / 4;
  } else throw Error(Is);
  else for (; o < n; ) a[o++] = Math.random() * 1e7 | 0;
  for (n = a[--o], e10 %= b, n && e10 && (i = G(10, b - e10), a[o] = (n / i | 0) * i); a[o] === 0; o--) a.pop();
  if (o < 0) r = 0, a = [0];
  else {
    for (r = -1; a[0] === 0; r -= b) a.shift();
    for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
    n < b && (r -= b - n);
  }
  return s.e = r, s.d = a, s;
}
function np(e10) {
  return y(e10 = new this(e10), e10.e + 1, this.rounding);
}
function ip(e10) {
  return e10 = new this(e10), e10.d ? e10.d[0] ? e10.s : 0 * e10.s : e10.s || NaN;
}
function op(e10) {
  return new this(e10).sin();
}
function sp(e10) {
  return new this(e10).sinh();
}
function ap(e10) {
  return new this(e10).sqrt();
}
function lp(e10, t) {
  return new this(e10).sub(t);
}
function up() {
  var e10 = 0, t = arguments, r = new this(t[e10]);
  for (x = false; r.s && ++e10 < t.length; ) r = r.plus(t[e10]);
  return x = true, y(r, this.precision, this.rounding);
}
function cp(e10) {
  return new this(e10).tan();
}
function pp(e10) {
  return new this(e10).tanh();
}
function dp(e10) {
  return y(e10 = new this(e10), e10.e + 1, 1);
}
m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
m[Symbol.toStringTag] = "Decimal";
var ot = m.constructor = Ms(ki);
an = new ot(an);
ln = new ot(ln);
var Re = ot;
function Rt(e10) {
  return ot.isDecimal(e10) ? true : e10 !== null && typeof e10 == "object" && typeof e10.s == "number" && typeof e10.e == "number" && typeof e10.toFixed == "function" && Array.isArray(e10.d);
}
var cr = class {
  constructor(t, r, n, i, o) {
    this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
  }
  _toGraphQLInputType() {
    let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
    return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
  }
};
function Ct(e10) {
  return e10 instanceof cr;
}
var mn = class {
  constructor(t) {
    this.value = t;
  }
  write(t) {
    t.write(this.value);
  }
  markAsError() {
    this.value.markAsError();
  }
};
var fn = (e10) => e10, gn = { bold: fn, red: fn, green: fn, dim: fn, enabled: false }, $s = { bold: H, red: ce, green: qe, dim: Oe, enabled: true }, St = { write(e10) {
  e10.writeLine(",");
} };
var Ce = class {
  constructor(t) {
    this.contents = t;
    this.isUnderlined = false;
    this.color = (t2) => t2;
  }
  underline() {
    return this.isUnderlined = true, this;
  }
  setColor(t) {
    return this.color = t, this;
  }
  write(t) {
    let r = t.getCurrentLineLength();
    t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
      t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
    });
  }
};
var Ye = class {
  constructor() {
    this.hasError = false;
  }
  markAsError() {
    return this.hasError = true, this;
  }
};
var At = class extends Ye {
  constructor() {
    super(...arguments);
    this.items = [];
  }
  addItem(r) {
    return this.items.push(new mn(r)), this;
  }
  getField(r) {
    return this.items[r];
  }
  getPrintWidth() {
    return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
  }
  write(r) {
    if (this.items.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithItems(r);
  }
  writeEmpty(r) {
    let n = new Ce("[]");
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithItems(r) {
    let { colors: n } = r.context;
    r.writeLine("[").withIndent(() => r.writeJoined(St, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
      r.writeLine(n.red("~".repeat(this.getPrintWidth())));
    });
  }
  asObject() {
  }
};
var qs = ": ", hn = class {
  constructor(t, r) {
    this.name = t;
    this.value = r;
    this.hasError = false;
  }
  markAsError() {
    this.hasError = true;
  }
  getPrintWidth() {
    return this.name.length + this.value.getPrintWidth() + qs.length;
  }
  write(t) {
    let r = new Ce(this.name);
    this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(qs).write(this.value);
  }
};
var It = class e4 extends Ye {
  constructor() {
    super(...arguments);
    this.fields = {};
    this.suggestions = [];
  }
  addField(r) {
    this.fields[r.name] = r;
  }
  addSuggestion(r) {
    this.suggestions.push(r);
  }
  getField(r) {
    return this.fields[r];
  }
  getDeepField(r) {
    let [n, ...i] = r, o = this.getField(n);
    if (!o) return;
    let s = o;
    for (let a of i) {
      let l;
      if (s.value instanceof e4 ? l = s.value.getField(a) : s.value instanceof At && (l = s.value.getField(Number(a))), !l) return;
      s = l;
    }
    return s;
  }
  getDeepFieldValue(r) {
    var _a3;
    return r.length === 0 ? this : (_a3 = this.getDeepField(r)) == null ? void 0 : _a3.value;
  }
  hasField(r) {
    return !!this.getField(r);
  }
  removeAllFields() {
    this.fields = {};
  }
  removeField(r) {
    delete this.fields[r];
  }
  getFields() {
    return this.fields;
  }
  isEmpty() {
    return Object.keys(this.fields).length === 0;
  }
  getFieldValue(r) {
    var _a3;
    return (_a3 = this.getField(r)) == null ? void 0 : _a3.value;
  }
  getDeepSubSelectionValue(r) {
    let n = this;
    for (let i of r) {
      if (!(n instanceof e4)) return;
      let o = n.getSubSelectionValue(i);
      if (!o) return;
      n = o;
    }
    return n;
  }
  getDeepSelectionParent(r) {
    let n = this.getSelectionParent();
    if (!n) return;
    let i = n;
    for (let o of r) {
      let s = i.value.getFieldValue(o);
      if (!s || !(s instanceof e4)) return;
      let a = s.getSelectionParent();
      if (!a) return;
      i = a;
    }
    return i;
  }
  getSelectionParent() {
    var _a3, _b2;
    let r = (_a3 = this.getField("select")) == null ? void 0 : _a3.value.asObject();
    if (r) return { kind: "select", value: r };
    let n = (_b2 = this.getField("include")) == null ? void 0 : _b2.value.asObject();
    if (n) return { kind: "include", value: n };
  }
  getSubSelectionValue(r) {
    var _a3;
    return (_a3 = this.getSelectionParent()) == null ? void 0 : _a3.value.fields[r].value;
  }
  getPrintWidth() {
    let r = Object.values(this.fields);
    return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
  }
  write(r) {
    let n = Object.values(this.fields);
    if (n.length === 0 && this.suggestions.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithContents(r, n);
  }
  asObject() {
    return this;
  }
  writeEmpty(r) {
    let n = new Ce("{}");
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithContents(r, n) {
    r.writeLine("{").withIndent(() => {
      r.writeJoined(St, [...n, ...this.suggestions]).newLine();
    }), r.write("}"), this.hasError && r.afterNextNewline(() => {
      r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
    });
  }
};
var W = class extends Ye {
  constructor(r) {
    super();
    this.text = r;
  }
  getPrintWidth() {
    return this.text.length;
  }
  write(r) {
    let n = new Ce(this.text);
    this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
  }
  asObject() {
  }
};
var Ni = class {
  constructor(t) {
    this.errorMessages = [];
    this.arguments = t;
  }
  write(t) {
    t.write(this.arguments);
  }
  addErrorMessage(t) {
    this.errorMessages.push(t);
  }
  renderAllMessages(t) {
    return this.errorMessages.map((r) => r(t)).join(`
`);
  }
};
function Ot(e10) {
  return new Ni(js(e10));
}
function js(e10) {
  let t = new It();
  for (let [r, n] of Object.entries(e10)) {
    let i = new hn(r, Vs(n));
    t.addField(i);
  }
  return t;
}
function Vs(e10) {
  if (typeof e10 == "string") return new W(JSON.stringify(e10));
  if (typeof e10 == "number" || typeof e10 == "boolean") return new W(String(e10));
  if (typeof e10 == "bigint") return new W(`${e10}n`);
  if (e10 === null) return new W("null");
  if (e10 === void 0) return new W("undefined");
  if (Rt(e10)) return new W(`new Prisma.Decimal("${e10.toFixed()}")`);
  if (e10 instanceof Uint8Array) return Buffer.isBuffer(e10) ? new W(`Buffer.alloc(${e10.byteLength})`) : new W(`new Uint8Array(${e10.byteLength})`);
  if (e10 instanceof Date) {
    let t = on(e10) ? e10.toISOString() : "Invalid Date";
    return new W(`new Date("${t}")`);
  }
  return e10 instanceof Ne ? new W(`Prisma.${e10._getName()}`) : Ct(e10) ? new W(`prisma.${vs(e10.modelName)}.$fields.${e10.name}`) : Array.isArray(e10) ? fp(e10) : typeof e10 == "object" ? js(e10) : new W(Object.prototype.toString.call(e10));
}
function fp(e10) {
  let t = new At();
  for (let r of e10) t.addItem(Vs(r));
  return t;
}
function yn(e10, t) {
  let r = t === "pretty" ? $s : gn, n = e10.renderAllMessages(r), i = new xt(0, { colors: r }).write(e10).toString();
  return { message: n, args: i };
}
function Bs(e10) {
  if (e10 === void 0) return "";
  let t = Ot(e10);
  return new xt(0, { colors: gn }).write(t).toString();
}
var gp = "P2037";
function st({ error: e10, user_facing_error: t }, r, n) {
  return t.error_code ? new V(hp(t, n), { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new B(e10, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
}
function hp(e10, t) {
  let r = e10.message;
  return (t === "postgresql" || t === "postgres" || t === "mysql") && e10.error_code === gp && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r;
}
var pr = "<unknown>";
function Us(e10) {
  var t = e10.split(`
`);
  return t.reduce(function(r, n) {
    var i = Ep(n) || xp(n) || Tp(n) || Ap(n) || Cp(n);
    return i && r.push(i), r;
  }, []);
}
var yp = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, bp = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function Ep(e10) {
  var t = yp.exec(e10);
  if (!t) return null;
  var r = t[2] && t[2].indexOf("native") === 0, n = t[2] && t[2].indexOf("eval") === 0, i = bp.exec(t[2]);
  return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: r ? null : t[2], methodName: t[1] || pr, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
}
var wp = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function xp(e10) {
  var t = wp.exec(e10);
  return t ? { file: t[2], methodName: t[1] || pr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
}
var Pp = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, vp = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function Tp(e10) {
  var t = Pp.exec(e10);
  if (!t) return null;
  var r = t[3] && t[3].indexOf(" > eval") > -1, n = vp.exec(t[3]);
  return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || pr, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
}
var Rp = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function Cp(e10) {
  var t = Rp.exec(e10);
  return t ? { file: t[3], methodName: t[1] || pr, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null;
}
var Sp = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Ap(e10) {
  var t = Sp.exec(e10);
  return t ? { file: t[2], methodName: t[1] || pr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
}
var Mi = class {
  getLocation() {
    return null;
  }
}, $i = class {
  constructor() {
    this._error = new Error();
  }
  getLocation() {
    let t = this._error.stack;
    if (!t) return null;
    let n = Us(t).find((i) => {
      if (!i.file) return false;
      let o = di(i.file);
      return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
    });
    return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
  }
};
function Ze(e10) {
  return e10 === "minimal" ? typeof $EnabledCallSite == "function" && e10 !== "minimal" ? new $EnabledCallSite() : new Mi() : new $i();
}
var Gs = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
function kt(e10 = {}) {
  let t = Op(e10);
  return Object.entries(t).reduce((n, [i, o]) => (Gs[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
}
function Op(e10 = {}) {
  return typeof e10._count == "boolean" ? { ...e10, _count: { _all: e10._count } } : e10;
}
function bn(e10 = {}) {
  return (t) => (typeof e10._count == "boolean" && (t._count = t._count._all), t);
}
function Qs(e10, t) {
  let r = bn(e10);
  return t({ action: "aggregate", unpacker: r, argsMapper: kt })(e10);
}
function kp(e10 = {}) {
  let { select: t, ...r } = e10;
  return typeof t == "object" ? kt({ ...r, _count: t }) : kt({ ...r, _count: { _all: true } });
}
function Dp(e10 = {}) {
  return typeof e10.select == "object" ? (t) => bn(e10)(t)._count : (t) => bn(e10)(t)._count._all;
}
function Js(e10, t) {
  return t({ action: "count", unpacker: Dp(e10), argsMapper: kp })(e10);
}
function _p(e10 = {}) {
  let t = kt(e10);
  if (Array.isArray(t.by)) for (let r of t.by) typeof r == "string" && (t.select[r] = true);
  else typeof t.by == "string" && (t.select[t.by] = true);
  return t;
}
function Fp(e10 = {}) {
  return (t) => (typeof (e10 == null ? void 0 : e10._count) == "boolean" && t.forEach((r) => {
    r._count = r._count._all;
  }), t);
}
function Ws(e10, t) {
  return t({ action: "groupBy", unpacker: Fp(e10), argsMapper: _p })(e10);
}
function Hs(e10, t, r) {
  if (t === "aggregate") return (n) => Qs(n, r);
  if (t === "count") return (n) => Js(n, r);
  if (t === "groupBy") return (n) => Ws(n, r);
}
function Ks(e10, t) {
  let r = t.fields.filter((i) => !i.relationName), n = Ei(r, (i) => i.name);
  return new Proxy({}, { get(i, o) {
    if (o in i || typeof o == "symbol") return i[o];
    let s = n[o];
    if (s) return new cr(e10, o, s.type, s.isList, s.kind === "enum");
  }, ...nn(Object.keys(n)) });
}
var zs = (e10) => Array.isArray(e10) ? e10 : e10.split("."), qi = (e10, t) => zs(t).reduce((r, n) => r && r[n], e10), Ys = (e10, t, r) => zs(t).reduceRight((n, i, o, s) => Object.assign({}, qi(e10, s.slice(0, o)), { [i]: n }), r);
function Lp(e10, t) {
  return e10 === void 0 || t === void 0 ? [] : [...t, "select", e10];
}
function Np(e10, t, r) {
  return t === void 0 ? e10 != null ? e10 : {} : Ys(t, r, e10 || true);
}
function ji(e10, t, r, n, i, o) {
  let a = e10._runtimeDataModel.models[t].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {});
  return (l) => {
    let u = Ze(e10._errorFormat), c = Lp(n, i), p = Np(l, o, c), d = r({ dataPath: c, callsite: u })(p), f = Mp(e10, t);
    return new Proxy(d, { get(g, h) {
      if (!f.includes(h)) return g[h];
      let T = [a[h].type, r, h], S = [c, p];
      return ji(e10, ...T, ...S);
    }, ...nn([...f, ...Object.getOwnPropertyNames(d)]) });
  };
}
function Mp(e10, t) {
  return e10._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
}
k(mi());
k(require$$2);
var Zs = { keyword: De, entity: De, value: (e10) => H(rt(e10)), punctuation: rt, directive: De, function: De, variable: (e10) => H(rt(e10)), string: (e10) => H(qe(e10)), boolean: ke, number: De, comment: Bt };
var $p = (e10) => e10, En = {}, qp = 0, P = { manual: En.Prism && En.Prism.manual, disableWorkerMessageHandler: En.Prism && En.Prism.disableWorkerMessageHandler, util: { encode: function(e10) {
  if (e10 instanceof ye) {
    let t = e10;
    return new ye(t.type, P.util.encode(t.content), t.alias);
  } else return Array.isArray(e10) ? e10.map(P.util.encode) : e10.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
}, type: function(e10) {
  return Object.prototype.toString.call(e10).slice(8, -1);
}, objId: function(e10) {
  return e10.__id || Object.defineProperty(e10, "__id", { value: ++qp }), e10.__id;
}, clone: function e5(t, r) {
  let n, i, o = P.util.type(t);
  switch (r = r || {}, o) {
    case "Object":
      if (i = P.util.objId(t), r[i]) return r[i];
      n = {}, r[i] = n;
      for (let s in t) t.hasOwnProperty(s) && (n[s] = e5(t[s], r));
      return n;
    case "Array":
      return i = P.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach(function(s, a) {
        n[a] = e5(s, r);
      }), n);
    default:
      return t;
  }
} }, languages: { extend: function(e10, t) {
  let r = P.util.clone(P.languages[e10]);
  for (let n in t) r[n] = t[n];
  return r;
}, insertBefore: function(e10, t, r, n) {
  n = n || P.languages;
  let i = n[e10], o = {};
  for (let a in i) if (i.hasOwnProperty(a)) {
    if (a == t) for (let l in r) r.hasOwnProperty(l) && (o[l] = r[l]);
    r.hasOwnProperty(a) || (o[a] = i[a]);
  }
  let s = n[e10];
  return n[e10] = o, P.languages.DFS(P.languages, function(a, l) {
    l === s && a != e10 && (this[a] = o);
  }), o;
}, DFS: function e6(t, r, n, i) {
  i = i || {};
  let o = P.util.objId;
  for (let s in t) if (t.hasOwnProperty(s)) {
    r.call(t, s, t[s], n || s);
    let a = t[s], l = P.util.type(a);
    l === "Object" && !i[o(a)] ? (i[o(a)] = true, e6(a, r, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = true, e6(a, r, s, i));
  }
} }};
P.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
P.languages.javascript = P.languages.extend("clike", { "class-name": [P.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
P.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
P.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: P.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: P.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: P.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: P.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
P.languages.markup && P.languages.markup.tag.addInlined("script", "javascript");
P.languages.js = P.languages.javascript;
P.languages.typescript = P.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
P.languages.ts = P.languages.typescript;
function ye(e10, t, r, n, i) {
  this.type = e10, this.content = t, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!i;
}
ye.stringify = function(e10, t) {
  return typeof e10 == "string" ? e10 : Array.isArray(e10) ? e10.map(function(r) {
    return ye.stringify(r, t);
  }).join("") : jp(e10.type)(e10.content);
};
function jp(e10) {
  return Zs[e10] || $p;
}
k(as());
var Bp = { red: ce, gray: Bt, dim: Oe, bold: H, underline: X, highlightSource: (e10) => e10.highlight() }, Up = { red: (e10) => e10, gray: (e10) => e10, dim: (e10) => e10, bold: (e10) => e10, underline: (e10) => e10, highlightSource: (e10) => e10 };
function Gp({ message: e10, originalMethod: t, isPanic: r, callArguments: n }) {
  return { functionName: `prisma.${t}()`, message: e10, isPanic: r != null ? r : false, callArguments: n };
}
function Qp({ callsite: e10, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
  let s = Gp({ message: t, originalMethod: r, isPanic: n, callArguments: i });
  return s;
}
function Hp({ functionName: e10, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
  let a = [""], l = t ? " in" : ":";
  if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e10}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e10}\``)} invocation${l}`)), t && a.push(s.underline(Kp(t))), i) {
    a.push("");
    let u = [i.toString()];
    o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
  } else a.push(""), o && a.push(o), a.push("");
  return a.push(r), a.join(`
`);
}
function Kp(e10) {
  let t = [e10.fileName];
  return e10.lineNumber && t.push(String(e10.lineNumber)), e10.columnNumber && t.push(String(e10.columnNumber)), t.join(":");
}
function Dt(e10) {
  let t = e10.showColors ? Bp : Up, r;
  return r = Qp(e10), Hp(r, t);
}
function ia(e10, t, r, n) {
  return e10 === Je.ModelAction.findFirstOrThrow || e10 === Je.ModelAction.findUniqueOrThrow ? zp(t, r, n) : n;
}
function zp(e10, t, r) {
  return async (n) => {
    if ("rejectOnNotFound" in n.args) {
      let o = Dt({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
      throw new J(o, { clientVersion: t });
    }
    return await r(n).catch((o) => {
      throw o instanceof V && o.code === "P2025" ? new Le(`No ${e10} found`, t) : o;
    });
  };
}
function Se(e10) {
  return e10.replace(/^./, (t) => t.toLowerCase());
}
var Yp = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"], Zp = ["aggregate", "count", "groupBy"];
function Vi(e10, t) {
  var _a3;
  let r = (_a3 = e10._extensions.getAllModelExtensions(t)) != null ? _a3 : {}, n = [Xp(e10, t), td(e10, t), lr(r), re("name", () => t), re("$name", () => t), re("$parent", () => e10._appliedParent)];
  return ve({}, n);
}
function Xp(e10, t) {
  let r = Se(t), n = Object.keys(Je.ModelAction).concat("count");
  return { getKeys() {
    return n;
  }, getPropertyValue(i) {
    let o = i, s = (l) => e10._request(l);
    s = ia(o, t, e10._clientVersion, s);
    let a = (l) => (u) => {
      let c = Ze(e10._errorFormat);
      return e10._createPrismaPromise((p) => {
        let d = { args: u, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: p, callsite: c };
        return s({ ...d, ...l });
      });
    };
    return Yp.includes(o) ? ji(e10, t, a) : ed(i) ? Hs(e10, i, a) : a({});
  } };
}
function ed(e10) {
  return Zp.includes(e10);
}
function td(e10, t) {
  return it(re("fields", () => {
    let r = e10._runtimeDataModel.models[t];
    return Ks(t, r);
  }));
}
function oa(e10) {
  return e10.replace(/^./, (t) => t.toUpperCase());
}
var Bi = Symbol();
function dr(e10) {
  let t = [rd(e10), re(Bi, () => e10), re("$parent", () => e10._appliedParent)], r = e10._extensions.getAllClientExtensions();
  return r && t.push(lr(r)), ve(e10, t);
}
function rd(e10) {
  let t = Object.keys(e10._runtimeDataModel.models), r = t.map(Se), n = [...new Set(t.concat(r))];
  return it({ getKeys() {
    return n;
  }, getPropertyValue(i) {
    let o = oa(i);
    if (e10._runtimeDataModel.models[o] !== void 0) return Vi(e10, o);
    if (e10._runtimeDataModel.models[i] !== void 0) return Vi(e10, i);
  }, getPropertyDescriptor(i) {
    if (!r.includes(i)) return { enumerable: false };
  } });
}
function sa(e10) {
  return e10[Bi] ? e10[Bi] : e10;
}
function aa(e10) {
  var _a3;
  if (typeof e10 == "function") return e10(this);
  if ((_a3 = e10.client) == null ? void 0 : _a3.__AccelerateEngine) {
    let r = e10.client.__AccelerateEngine;
    this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig);
  }
  let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e10) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
  return dr(t);
}
function la({ result: e10, modelName: t, select: r, omit: n, extensions: i }) {
  let o = i.getAllComputedFields(t);
  if (!o) return e10;
  let s = [], a = [];
  for (let l of Object.values(o)) {
    if (n) {
      if (n[l.name]) continue;
      let u = l.needs.filter((c) => n[c]);
      u.length > 0 && a.push(Et(u));
    } else if (r) {
      if (!r[l.name]) continue;
      let u = l.needs.filter((c) => !r[c]);
      u.length > 0 && a.push(Et(u));
    }
    nd(e10, l.needs) && s.push(id(l, ve(e10, s)));
  }
  return s.length > 0 || a.length > 0 ? ve(e10, [...s, ...a]) : e10;
}
function nd(e10, t) {
  return t.every((r) => bi(e10, r));
}
function id(e10, t) {
  return it(re(e10.name, () => e10.compute(t)));
}
function xn({ visitor: e10, result: t, args: r, runtimeDataModel: n, modelName: i }) {
  var _a3;
  if (Array.isArray(t)) {
    for (let s = 0; s < t.length; s++) t[s] = xn({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e10 });
    return t;
  }
  let o = (_a3 = e10(t, i, r)) != null ? _a3 : t;
  return r.include && ua({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e10 }), r.select && ua({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e10 }), o;
}
function ua({ includeOrSelect: e10, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
  for (let [o, s] of Object.entries(e10)) {
    if (!s || t[o] == null || xe(s)) continue;
    let l = n.models[r].fields.find((c) => c.name === o);
    if (!l || l.kind !== "object" || !l.relationName) continue;
    let u = typeof s == "object" ? s : {};
    t[o] = xn({ visitor: i, result: t[o], args: u, modelName: l.type, runtimeDataModel: n });
  }
}
function ca({ result: e10, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
  return n.isEmpty() || e10 == null || typeof e10 != "object" || !i.models[t] ? e10 : xn({ result: e10, args: r != null ? r : {}, modelName: t, runtimeDataModel: i, visitor: (a, l, u) => {
    let c = Se(l);
    return la({ result: a, modelName: c, select: u.select, omit: u.select ? void 0 : { ...o == null ? void 0 : o[c], ...u.omit }, extensions: n });
  } });
}
function pa(e10) {
  if (e10 instanceof ie) return od(e10);
  if (Array.isArray(e10)) {
    let r = [e10[0]];
    for (let n = 1; n < e10.length; n++) r[n] = mr(e10[n]);
    return r;
  }
  let t = {};
  for (let r in e10) t[r] = mr(e10[r]);
  return t;
}
function od(e10) {
  return new ie(e10.strings, e10.values);
}
function mr(e10) {
  if (typeof e10 != "object" || e10 == null || e10 instanceof Ne || Ct(e10)) return e10;
  if (Rt(e10)) return new Re(e10.toFixed());
  if (Pt(e10)) return /* @__PURE__ */ new Date(+e10);
  if (ArrayBuffer.isView(e10)) return e10.slice(0);
  if (Array.isArray(e10)) {
    let t = e10.length, r;
    for (r = Array(t); t--; ) r[t] = mr(e10[t]);
    return r;
  }
  if (typeof e10 == "object") {
    let t = {};
    for (let r in e10) r === "__proto__" ? Object.defineProperty(t, r, { value: mr(e10[r]), configurable: true, enumerable: true, writable: true }) : t[r] = mr(e10[r]);
    return t;
  }
  Fe(e10, "Unknown value");
}
function ma(e10, t, r, n = 0) {
  return e10._createPrismaPromise((i) => {
    var _a3, _b2;
    let o = t.customDataProxyFetch;
    return "transaction" in t && i !== void 0 && (((_a3 = t.transaction) == null ? void 0 : _a3.kind) === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e10._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: pa((_b2 = t.args) != null ? _b2 : {}), __internalParams: t, query: (s, a = t) => {
      let l = a.customDataProxyFetch;
      return a.customDataProxyFetch = ya(o, l), a.args = s, ma(e10, a, r, n + 1);
    } });
  });
}
function fa(e10, t) {
  let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
  if (e10._extensions.isEmpty()) return e10._executeRequest(t);
  let s = e10._extensions.getAllQueryCallbacks(r != null ? r : "$none", o);
  return ma(e10, t, s);
}
function ga(e10) {
  return (t) => {
    let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
    return n.length ? ha(r, n, 0, e10) : e10(r);
  };
}
function ha(e10, t, r, n) {
  if (r === t.length) return n(e10);
  let i = e10.customDataProxyFetch, o = e10.requests[0].transaction;
  return t[r]({ args: { queries: e10.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e10, query(s, a = e10) {
    let l = a.customDataProxyFetch;
    return a.customDataProxyFetch = ya(i, l), ha(a, t, r + 1, n);
  } });
}
var da = (e10) => e10;
function ya(e10 = da, t = da) {
  return (r) => e10(t(r));
}
function Ea(e10, t, r) {
  let n = Se(r);
  return !t.result || !(t.result.$allModels || t.result[n]) ? e10 : sd({ ...e10, ...ba(t.name, e10, t.result.$allModels), ...ba(t.name, e10, t.result[n]) });
}
function sd(e10) {
  let t = new Pe(), r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e10[n] ? e10[n].needs.flatMap((o) => r(o, i)) : [n]));
  return yt(e10, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
}
function ba(e10, t, r) {
  return r ? yt(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: ad(t, o, i) })) : {};
}
function ad(e10, t, r) {
  var _a3;
  let n = (_a3 = e10 == null ? void 0 : e10[t]) == null ? void 0 : _a3.compute;
  return n ? (i) => r({ ...i, [t]: n(i) }) : r;
}
function wa(e10, t) {
  if (!t) return e10;
  let r = { ...e10 };
  for (let n of Object.values(t)) if (e10[n.name]) for (let i of n.needs) r[i] = true;
  return r;
}
function xa(e10, t) {
  if (!t) return e10;
  let r = { ...e10 };
  for (let n of Object.values(t)) if (!e10[n.name]) for (let i of n.needs) delete r[i];
  return r;
}
var Pn = class {
  constructor(t, r) {
    this.extension = t;
    this.previous = r;
    this.computedFieldsCache = new Pe();
    this.modelExtensionsCache = new Pe();
    this.queryCallbacksCache = new Pe();
    this.clientExtensions = er(() => {
      var _a3, _b2;
      return this.extension.client ? { ...(_a3 = this.previous) == null ? void 0 : _a3.getAllClientExtensions(), ...this.extension.client } : (_b2 = this.previous) == null ? void 0 : _b2.getAllClientExtensions();
    });
    this.batchCallbacks = er(() => {
      var _a3, _b2, _c3;
      let t2 = (_b2 = (_a3 = this.previous) == null ? void 0 : _a3.getAllBatchQueryCallbacks()) != null ? _b2 : [], r2 = (_c3 = this.extension.query) == null ? void 0 : _c3.$__internalBatch;
      return r2 ? t2.concat(r2) : t2;
    });
  }
  getAllComputedFields(t) {
    return this.computedFieldsCache.getOrCreate(t, () => {
      var _a3;
      return Ea((_a3 = this.previous) == null ? void 0 : _a3.getAllComputedFields(t), this.extension, t);
    });
  }
  getAllClientExtensions() {
    return this.clientExtensions.get();
  }
  getAllModelExtensions(t) {
    return this.modelExtensionsCache.getOrCreate(t, () => {
      var _a3, _b2;
      let r = Se(t);
      return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? (_a3 = this.previous) == null ? void 0 : _a3.getAllModelExtensions(t) : { ...(_b2 = this.previous) == null ? void 0 : _b2.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
    });
  }
  getAllQueryCallbacks(t, r) {
    return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
      var _a3, _b2;
      let n = (_b2 = (_a3 = this.previous) == null ? void 0 : _a3.getAllQueryCallbacks(t, r)) != null ? _b2 : [], i = [], o = this.extension.query;
      return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
    });
  }
  getAllBatchQueryCallbacks() {
    return this.batchCallbacks.get();
  }
}, vn = class e8 {
  constructor(t) {
    this.head = t;
  }
  static empty() {
    return new e8();
  }
  static single(t) {
    return new e8(new Pn(t));
  }
  isEmpty() {
    return this.head === void 0;
  }
  append(t) {
    return new e8(new Pn(t, this.head));
  }
  getAllComputedFields(t) {
    var _a3;
    return (_a3 = this.head) == null ? void 0 : _a3.getAllComputedFields(t);
  }
  getAllClientExtensions() {
    var _a3;
    return (_a3 = this.head) == null ? void 0 : _a3.getAllClientExtensions();
  }
  getAllModelExtensions(t) {
    var _a3;
    return (_a3 = this.head) == null ? void 0 : _a3.getAllModelExtensions(t);
  }
  getAllQueryCallbacks(t, r) {
    var _a3, _b2;
    return (_b2 = (_a3 = this.head) == null ? void 0 : _a3.getAllQueryCallbacks(t, r)) != null ? _b2 : [];
  }
  getAllBatchQueryCallbacks() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.head) == null ? void 0 : _a3.getAllBatchQueryCallbacks()) != null ? _b2 : [];
  }
};
var Pa = L("prisma:client"), va = { Vercel: "vercel", "Netlify CI": "netlify" };
function Ta({ postinstall: e10, ciName: t, clientVersion: r }) {
  if (Pa("checkPlatformCaching:postinstall", e10), Pa("checkPlatformCaching:ciName", t), e10 === true && t && t in va) {
    let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${va[t]}-build`;
    throw console.error(n), new R(n, r);
  }
}
function Ra(e10, t) {
  return e10 ? e10.datasources ? e10.datasources : e10.datasourceUrl ? { [t[0]]: { url: e10.datasourceUrl } } : {} : {};
}
var ld = "Cloudflare-Workers", ud = "node";
function Ca() {
  var _a3, _b2, _c3;
  return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : ((_a3 = globalThis.navigator) == null ? void 0 : _a3.userAgent) === ld ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : ((_c3 = (_b2 = globalThis.process) == null ? void 0 : _b2.release) == null ? void 0 : _c3.name) === ud ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
}
var cd = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
function Tn() {
  let e10 = Ca();
  return { id: e10, prettyName: cd[e10] || e10, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e10) };
}
var ka = k(require$$2), fr = k(require$$1);
function Rn(e10) {
  let { runtimeBinaryTarget: t } = e10;
  return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${pd(e10)}`;
}
function pd(e10) {
  let { generator: t, generatorBinaryTargets: r, runtimeBinaryTarget: n } = e10, i = { fromEnvVar: null, value: n }, o = [...r, i];
  return gi({ ...t, binaryTargets: o });
}
function Xe(e10) {
  let { runtimeBinaryTarget: t } = e10;
  return `Prisma Client could not locate the Query Engine for runtime "${t}".`;
}
function et(e10) {
  let { searchedLocations: t } = e10;
  return `The following locations have been searched:
${[...new Set(t)].map((i) => `  ${i}`).join(`
`)}`;
}
function Sa(e10) {
  let { runtimeBinaryTarget: t } = e10;
  return `${Xe(e10)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${Rn(e10)}

${et(e10)}`;
}
function Cn(e10) {
  return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e10}`;
}
function Sn(e10) {
  let { errorStack: t } = e10;
  return (t == null ? void 0 : t.match(/\/\.next|\/next@|\/next\//)) ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.` : "";
}
function Aa(e10) {
  let { queryEngineName: t } = e10;
  return `${Xe(e10)}${Sn(e10)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${e10.expectedLocation}".

${Cn("engine-not-found-bundler-investigation")}

${et(e10)}`;
}
function Ia(e10) {
  var _a3;
  let { runtimeBinaryTarget: t, generatorBinaryTargets: r } = e10, n = r.find((i) => i.native);
  return `${Xe(e10)}

This happened because Prisma Client was generated for "${(_a3 = n == null ? void 0 : n.value) != null ? _a3 : "unknown"}", but the actual deployment required "${t}".
${Rn(e10)}

${et(e10)}`;
}
function Oa(e10) {
  let { queryEngineName: t } = e10;
  return `${Xe(e10)}${Sn(e10)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${e10.expectedLocation}".

${Cn("engine-not-found-tooling-investigation")}

${et(e10)}`;
}
var dd = L("prisma:client:engines:resolveEnginePath"), md = () => new RegExp("runtime[\\\\/]library\\.m?js$");
async function Da(e10, t) {
  var _a3, _b2, _c3;
  let r = (_a3 = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e10]) != null ? _a3 : t.prismaPath;
  if (r !== void 0) return r;
  let { enginePath: n, searchedLocations: i } = await fd(e10, t);
  if (dd("enginePath", n), n !== void 0) return t.prismaPath = n;
  let o = await nt(), s = (_c3 = (_b2 = t.generator) == null ? void 0 : _b2.binaryTargets) != null ? _c3 : [], a = s.some((d) => d.native), l = !s.some((d) => d.value === o), u = __filename.match(md()) === null, c = { searchedLocations: i, generatorBinaryTargets: s, generator: t.generator, runtimeBinaryTarget: o, queryEngineName: _a(e10, o), expectedLocation: fr.default.relative(process.cwd(), t.dirname), errorStack: new Error().stack }, p;
  throw a && l ? p = Ia(c) : l ? p = Sa(c) : u ? p = Aa(c) : p = Oa(c), new R(p, t.clientVersion);
}
async function fd(engineType, config) {
  var _a3, _b2, _c3;
  let binaryTarget = await nt(), searchedLocations = [], dirname = eval("__dirname"), searchLocations = [config.dirname, fr.default.resolve(dirname, ".."), (_c3 = (_b2 = (_a3 = config.generator) == null ? void 0 : _a3.output) == null ? void 0 : _b2.value) != null ? _c3 : dirname, fr.default.resolve(dirname, "../../../.prisma/client"), "/tmp/prisma-engines", config.cwd];
  __filename.includes("resolveEnginePath") && searchLocations.push(Ko());
  for (let e10 of searchLocations) {
    let t = _a(engineType, binaryTarget), r = fr.default.join(e10, t);
    if (searchedLocations.push(e10), ka.default.existsSync(r)) return { enginePath: r, searchedLocations };
  }
  return { enginePath: void 0, searchedLocations };
}
function _a(e10, t) {
  return $r(t) ;
}
var Ui = k(yi());
function Fa(e10) {
  return e10 ? e10.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
}
function La(e10) {
  return e10.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
}
var Na = k(fs());
function Ma({ title: e10, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.yml", body: i }) {
  return (0, Na.default)({ user: t, repo: r, template: n, title: e10, body: i });
}
function $a({ version: e10, binaryTarget: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
  var _a3, _b2;
  let a = Ro(6e3 - ((_a3 = s == null ? void 0 : s.length) != null ? _a3 : 0)), l = La((0, Ui.default)(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = (0, Ui.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${(_b2 = process.version) == null ? void 0 : _b2.padEnd(19)}| 
| OS              | ${t == null ? void 0 : t.padEnd(19)}|
| Prisma Client   | ${e10 == null ? void 0 : e10.padEnd(19)}|
| Query Engine    | ${i == null ? void 0 : i.padEnd(19)}|
| Database        | ${o == null ? void 0 : o.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? Fa(s) : ""}
\`\`\`
`), p = Ma({ title: r, body: c });
  return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${X(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
}
function _t({ inlineDatasources: e10, overrideDatasources: t, env: r, clientVersion: n }) {
  var _a3, _b2;
  let i, o = Object.keys(e10)[0], s = (_a3 = e10[o]) == null ? void 0 : _a3.url, a = (_b2 = t[o]) == null ? void 0 : _b2.url;
  if (o === void 0 ? i = void 0 : a ? i = a : (s == null ? void 0 : s.value) ? i = s.value : (s == null ? void 0 : s.fromEnvVar) && (i = r[s.fromEnvVar]), (s == null ? void 0 : s.fromEnvVar) !== void 0 && i === void 0) throw new R(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
  if (i === void 0) throw new R("error: Missing URL environment variable, value, or override.", n);
  return i;
}
var An = class extends Error {
  constructor(t, r) {
    super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
  }
  get [Symbol.toStringTag]() {
    return this.name;
  }
};
var se = class extends An {
  constructor(t, r) {
    var _a3;
    super(t, r), this.isRetryable = (_a3 = r.isRetryable) != null ? _a3 : true;
  }
};
function A(e10, t) {
  return { ...e10, isRetryable: t };
}
var Ft = class extends se {
  constructor(r) {
    super("This request must be retried", A(r, true));
    this.name = "ForcedRetryError";
    this.code = "P5001";
  }
};
w(Ft, "ForcedRetryError");
var at = class extends se {
  constructor(r, n) {
    super(r, A(n, false));
    this.name = "InvalidDatasourceError";
    this.code = "P6001";
  }
};
w(at, "InvalidDatasourceError");
var lt = class extends se {
  constructor(r, n) {
    super(r, A(n, false));
    this.name = "NotImplementedYetError";
    this.code = "P5004";
  }
};
w(lt, "NotImplementedYetError");
var q = class extends se {
  constructor(t, r) {
    super(t, r), this.response = r.response;
    let n = this.response.headers.get("prisma-request-id");
    if (n) {
      let i = `(The request id was: ${n})`;
      this.message = this.message + " " + i;
    }
  }
};
var ut = class extends q {
  constructor(r) {
    super("Schema needs to be uploaded", A(r, true));
    this.name = "SchemaMissingError";
    this.code = "P5005";
  }
};
w(ut, "SchemaMissingError");
var Gi = "This request could not be understood by the server", gr = class extends q {
  constructor(r, n, i) {
    super(n || Gi, A(r, false));
    this.name = "BadRequestError";
    this.code = "P5000";
    i && (this.code = i);
  }
};
w(gr, "BadRequestError");
var hr = class extends q {
  constructor(r, n) {
    super("Engine not started: healthcheck timeout", A(r, true));
    this.name = "HealthcheckTimeoutError";
    this.code = "P5013";
    this.logs = n;
  }
};
w(hr, "HealthcheckTimeoutError");
var yr = class extends q {
  constructor(r, n, i) {
    super(n, A(r, true));
    this.name = "EngineStartupError";
    this.code = "P5014";
    this.logs = i;
  }
};
w(yr, "EngineStartupError");
var br = class extends q {
  constructor(r) {
    super("Engine version is not supported", A(r, false));
    this.name = "EngineVersionNotSupportedError";
    this.code = "P5012";
  }
};
w(br, "EngineVersionNotSupportedError");
var Qi = "Request timed out", Er = class extends q {
  constructor(r, n = Qi) {
    super(n, A(r, false));
    this.name = "GatewayTimeoutError";
    this.code = "P5009";
  }
};
w(Er, "GatewayTimeoutError");
var gd = "Interactive transaction error", wr = class extends q {
  constructor(r, n = gd) {
    super(n, A(r, false));
    this.name = "InteractiveTransactionError";
    this.code = "P5015";
  }
};
w(wr, "InteractiveTransactionError");
var hd = "Request parameters are invalid", xr = class extends q {
  constructor(r, n = hd) {
    super(n, A(r, false));
    this.name = "InvalidRequestError";
    this.code = "P5011";
  }
};
w(xr, "InvalidRequestError");
var Ji = "Requested resource does not exist", Pr = class extends q {
  constructor(r, n = Ji) {
    super(n, A(r, false));
    this.name = "NotFoundError";
    this.code = "P5003";
  }
};
w(Pr, "NotFoundError");
var Wi = "Unknown server error", Lt = class extends q {
  constructor(r, n, i) {
    super(n || Wi, A(r, true));
    this.name = "ServerError";
    this.code = "P5006";
    this.logs = i;
  }
};
w(Lt, "ServerError");
var Hi = "Unauthorized, check your connection string", vr = class extends q {
  constructor(r, n = Hi) {
    super(n, A(r, false));
    this.name = "UnauthorizedError";
    this.code = "P5007";
  }
};
w(vr, "UnauthorizedError");
var Ki = "Usage exceeded, retry again later", Tr = class extends q {
  constructor(r, n = Ki) {
    super(n, A(r, true));
    this.name = "UsageExceededError";
    this.code = "P5008";
  }
};
w(Tr, "UsageExceededError");
async function yd(e10) {
  let t;
  try {
    t = await e10.text();
  } catch {
    return { type: "EmptyError" };
  }
  try {
    let r = JSON.parse(t);
    if (typeof r == "string") switch (r) {
      case "InternalDataProxyError":
        return { type: "DataProxyError", body: r };
      default:
        return { type: "UnknownTextError", body: r };
    }
    if (typeof r == "object" && r !== null) {
      if ("is_panic" in r && "message" in r && "error_code" in r) return { type: "QueryEngineError", body: r };
      if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
        let n = Object.values(r)[0].reason;
        return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
      }
    }
    return { type: "UnknownJsonError", body: r };
  } catch {
    return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
  }
}
async function Rr(e10, t) {
  if (e10.ok) return;
  let r = { clientVersion: t, response: e10 }, n = await yd(e10);
  if (n.type === "QueryEngineError") throw new V(n.body.message, { code: n.body.error_code, clientVersion: t });
  if (n.type === "DataProxyError") {
    if (n.body === "InternalDataProxyError") throw new Lt(r, "Internal Data Proxy error");
    if ("EngineNotStarted" in n.body) {
      if (n.body.EngineNotStarted.reason === "SchemaMissing") return new ut(r);
      if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported") throw new br(r);
      if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
        let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
        throw new yr(r, i, o);
      }
      if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
        let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
        throw new R(i, t, o);
      }
      if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
        let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
        throw new hr(r, i);
      }
    }
    if ("InteractiveTransactionMisrouted" in n.body) {
      let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
      throw new wr(r, i[n.body.InteractiveTransactionMisrouted.reason]);
    }
    if ("InvalidRequestError" in n.body) throw new xr(r, n.body.InvalidRequestError.reason);
  }
  if (e10.status === 401 || e10.status === 403) throw new vr(r, Nt(Hi, n));
  if (e10.status === 404) return new Pr(r, Nt(Ji, n));
  if (e10.status === 429) throw new Tr(r, Nt(Ki, n));
  if (e10.status === 504) throw new Er(r, Nt(Qi, n));
  if (e10.status >= 500) throw new Lt(r, Nt(Wi, n));
  if (e10.status >= 400) throw new gr(r, Nt(Gi, n));
}
function Nt(e10, t) {
  return t.type === "EmptyError" ? e10 : `${e10}: ${JSON.stringify(t)}`;
}
function qa(e10) {
  let t = Math.pow(2, e10) * 50, r = Math.ceil(Math.random() * t) - Math.ceil(t / 2), n = t + r;
  return new Promise((i) => setTimeout(() => i(n), n));
}
var $e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function ja(e10) {
  let t = new TextEncoder().encode(e10), r = "", n = t.byteLength, i = n % 3, o = n - i, s, a, l, u, c;
  for (let p = 0; p < o; p = p + 3) c = t[p] << 16 | t[p + 1] << 8 | t[p + 2], s = (c & 16515072) >> 18, a = (c & 258048) >> 12, l = (c & 4032) >> 6, u = c & 63, r += $e[s] + $e[a] + $e[l] + $e[u];
  return i == 1 ? (c = t[o], s = (c & 252) >> 2, a = (c & 3) << 4, r += $e[s] + $e[a] + "==") : i == 2 && (c = t[o] << 8 | t[o + 1], s = (c & 64512) >> 10, a = (c & 1008) >> 4, l = (c & 15) << 2, r += $e[s] + $e[a] + $e[l] + "="), r;
}
function Va(e10) {
  var _a3;
  if (!!((_a3 = e10.generator) == null ? void 0 : _a3.previewFeatures.some((r) => r.toLowerCase().includes("metrics")))) throw new R("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e10.clientVersion);
}
function bd(e10) {
  return e10[0] * 1e3 + e10[1] / 1e6;
}
function Ba(e10) {
  return new Date(bd(e10));
}
var Ua = { "@prisma/engines-version": "5.20.0-12.06fc58a368dc7be9fbbbe894adf8d445d208c284"};
var Cr = class extends se {
  constructor(r, n) {
    super(`Cannot fetch data from service:
${r}`, A(n, true));
    this.name = "RequestError";
    this.code = "P5010";
  }
};
w(Cr, "RequestError");
async function ct(e10, t, r = (n) => n) {
  var _a3;
  let n = t.clientVersion;
  try {
    return typeof fetch == "function" ? await r(fetch)(e10, t) : await r(zi)(e10, t);
  } catch (i) {
    let o = (_a3 = i.message) != null ? _a3 : "Unknown error";
    throw new Cr(o, { clientVersion: n });
  }
}
function wd(e10) {
  return { ...e10.headers, "Content-Type": "application/json" };
}
function xd(e10) {
  return { method: e10.method, headers: wd(e10) };
}
function Pd(e10, t) {
  return { text: () => Promise.resolve(Buffer.concat(e10).toString()), json: () => Promise.resolve().then(() => JSON.parse(Buffer.concat(e10).toString())), ok: t.statusCode >= 200 && t.statusCode <= 299, status: t.statusCode, url: t.url, headers: new Yi(t.headers) };
}
async function zi(e10, t = {}) {
  let r = vd("https"), n = xd(t), i = [], { origin: o } = new URL(e10);
  return new Promise((s, a) => {
    var _a3;
    let l = r.request(e10, n, (u) => {
      let { statusCode: c, headers: { location: p } } = u;
      c >= 301 && c <= 399 && p && (p.startsWith("http") === false ? s(zi(`${o}${p}`, t)) : s(zi(p, t))), u.on("data", (d) => i.push(d)), u.on("end", () => s(Pd(i, u))), u.on("error", a);
    });
    l.on("error", a), l.end((_a3 = t.body) != null ? _a3 : "");
  });
}
var vd = typeof commonjsRequire < "u" ? commonjsRequire : () => {
}, Yi = class {
  constructor(t = {}) {
    this.headers = /* @__PURE__ */ new Map();
    for (let [r, n] of Object.entries(t)) if (typeof n == "string") this.headers.set(r, n);
    else if (Array.isArray(n)) for (let i of n) this.headers.set(r, i);
  }
  append(t, r) {
    this.headers.set(t, r);
  }
  delete(t) {
    this.headers.delete(t);
  }
  get(t) {
    var _a3;
    return (_a3 = this.headers.get(t)) != null ? _a3 : null;
  }
  has(t) {
    return this.headers.has(t);
  }
  set(t, r) {
    this.headers.set(t, r);
  }
  forEach(t, r) {
    for (let [n, i] of this.headers) t.call(r, i, n, this);
  }
};
var Td = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/, Ga = L("prisma:client:dataproxyEngine");
async function Rd(e10, t) {
  var _a3, _b2, _c3;
  let r = Ua["@prisma/engines-version"], n = (_a3 = t.clientVersion) != null ? _a3 : "unknown";
  if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
  if (e10.includes("accelerate") && n !== "0.0.0" && n !== "in-memory") return n;
  let [i, o] = (_b2 = n == null ? void 0 : n.split("-")) != null ? _b2 : [];
  if (o === void 0 && Td.test(i)) return i;
  if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
    if (e10.startsWith("localhost") || e10.startsWith("127.0.0.1")) return "0.0.0";
    let [s] = (_c3 = r.split("-")) != null ? _c3 : [], [a, l, u] = s.split("."), c = Cd(`<=${a}.${l}.${u}`), p = await ct(c, { clientVersion: n });
    if (!p.ok) throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${await p.text() || "<empty body>"}`);
    let d = await p.text();
    Ga("length of body fetched from unpkg.com", d.length);
    let f;
    try {
      f = JSON.parse(d);
    } catch (g) {
      throw console.error("JSON.parse error: body fetched from unpkg.com: ", d), g;
    }
    return f.version;
  }
  throw new lt("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
}
async function Qa(e10, t) {
  let r = await Rd(e10, t);
  return Ga("version", r), r;
}
function Cd(e10) {
  return encodeURI(`https://unpkg.com/prisma@${e10}/package.json`);
}
var Ja = 3, Zi = L("prisma:client:dataproxyEngine"), Xi = class {
  constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
    this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
  }
  build({ traceparent: t, interactiveTransaction: r } = {}) {
    let n = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
    this.tracingHelper.isEnabled() && (n.traceparent = t != null ? t : this.tracingHelper.getTraceParent()), r && (n["X-transaction-id"] = r.id);
    let i = this.buildCaptureSettings();
    return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
  }
  buildCaptureSettings() {
    let t = [];
    return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
  }
}, Sr = class {
  constructor(t) {
    this.name = "DataProxyEngine";
    Va(t), this.config = t, this.env = { ...t.env, ...typeof process < "u" ? process.env : {} }, this.inlineSchema = ja(t.inlineSchema), this.inlineDatasources = t.inlineDatasources, this.inlineSchemaHash = t.inlineSchemaHash, this.clientVersion = t.clientVersion, this.engineHash = t.engineVersion, this.logEmitter = t.logEmitter, this.tracingHelper = t.tracingHelper;
  }
  apiKey() {
    return this.headerBuilder.apiKey;
  }
  version() {
    return this.engineHash;
  }
  async start() {
    this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => {
      let [t, r] = this.extractHostAndApiKey();
      this.host = t, this.headerBuilder = new Xi({ apiKey: r, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await Qa(t, this.config), Zi("host", this.host);
    })(), await this.startPromise;
  }
  async stop() {
  }
  propagateResponseExtensions(t) {
    var _a3, _b2;
    ((_a3 = t == null ? void 0 : t.logs) == null ? void 0 : _a3.length) && t.logs.forEach((r) => {
      switch (r.level) {
        case "debug":
        case "error":
        case "trace":
        case "warn":
        case "info":
          break;
        case "query": {
          let n = typeof r.attributes.query == "string" ? r.attributes.query : "";
          if (!this.tracingHelper.isEnabled()) {
            let [i] = n.split("/* traceparent");
            n = i;
          }
          this.logEmitter.emit("query", { query: n, timestamp: Ba(r.timestamp), duration: Number(r.attributes.duration_ms), params: r.attributes.params, target: r.attributes.target });
        }
      }
    }), ((_b2 = t == null ? void 0 : t.traces) == null ? void 0 : _b2.length) && this.tracingHelper.createEngineSpan({ span: true, spans: t.traces });
  }
  onBeforeExit() {
    throw new Error('"beforeExit" hook is not applicable to the remote query engine');
  }
  async url(t) {
    return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`;
  }
  async uploadSchema() {
    let t = { name: "schemaUpload", internal: true };
    return this.tracingHelper.runInChildSpan(t, async () => {
      let r = await ct(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
      r.ok || Zi("schema response status", r.status);
      let n = await Rr(r, this.clientVersion);
      if (n) throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: /* @__PURE__ */ new Date(), target: "" }), n;
      this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
    });
  }
  request(t, { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i }) {
    return this.requestInternal({ body: t, traceparent: r, interactiveTransaction: n, customDataProxyFetch: i });
  }
  async requestBatch(t, { traceparent: r, transaction: n, customDataProxyFetch: i }) {
    let o = (n == null ? void 0 : n.kind) === "itx" ? n.options : void 0, s = wt(t, n), { batchResult: a, elapsed: l } = await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: r });
    return a.map((u) => "errors" in u && u.errors.length > 0 ? st(u.errors[0], this.clientVersion, this.config.activeProvider) : { data: u, elapsed: l });
  }
  requestInternal({ body: t, traceparent: r, customDataProxyFetch: n, interactiveTransaction: i }) {
    return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: o }) => {
      let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
      o(s);
      let a = await ct(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r, interactiveTransaction: i }), body: JSON.stringify(t), clientVersion: this.clientVersion }, n);
      a.ok || Zi("graphql response status", a.status), await this.handleError(await Rr(a, this.clientVersion));
      let l = await a.json(), u = l.extensions;
      if (u && this.propagateResponseExtensions(u), l.errors) throw l.errors.length === 1 ? st(l.errors[0], this.config.clientVersion, this.config.activeProvider) : new B(l.errors, { clientVersion: this.config.clientVersion });
      return l;
    } });
  }
  async transaction(t, r, n) {
    let i = { start: "starting", commit: "committing", rollback: "rolling back" };
    return this.withRetry({ actionGerund: `${i[t]} transaction`, callback: async ({ logHttpCall: o }) => {
      if (t === "start") {
        let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), a = await this.url("transaction/start");
        o(a);
        let l = await ct(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), body: s, clientVersion: this.clientVersion });
        await this.handleError(await Rr(l, this.clientVersion));
        let u = await l.json(), c = u.extensions;
        c && this.propagateResponseExtensions(c);
        let p = u.id, d = u["data-proxy"].endpoint;
        return { id: p, payload: { endpoint: d } };
      } else {
        let s = `${n.payload.endpoint}/${t}`;
        o(s);
        let a = await ct(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), clientVersion: this.clientVersion });
        await this.handleError(await Rr(a, this.clientVersion));
        let u = (await a.json()).extensions;
        u && this.propagateResponseExtensions(u);
        return;
      }
    } });
  }
  extractHostAndApiKey() {
    let t = { clientVersion: this.clientVersion }, r = Object.keys(this.inlineDatasources)[0], n = _t({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), i;
    try {
      i = new URL(n);
    } catch {
      throw new at(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
    }
    let { protocol: o, host: s, searchParams: a } = i;
    if (o !== "prisma:") throw new at(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
    let l = a.get("api_key");
    if (l === null || l.length < 1) throw new at(`Error validating datasource \`${r}\`: the URL must contain a valid API key`, t);
    return [s, l];
  }
  metrics() {
    throw new lt("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
  }
  async withRetry(t) {
    var _a3;
    for (let r = 0; ; r++) {
      let n = (i) => {
        this.logEmitter.emit("info", { message: `Calling ${i} (n=${r})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
      };
      try {
        return await t.callback({ logHttpCall: n });
      } catch (i) {
        if (!(i instanceof se) || !i.isRetryable) throw i;
        if (r >= Ja) throw i instanceof Ft ? i.cause : i;
        this.logEmitter.emit("warn", { message: `Attempt ${r + 1}/${Ja} failed for ${t.actionGerund}: ${(_a3 = i.message) != null ? _a3 : "(unknown)"}`, timestamp: /* @__PURE__ */ new Date(), target: "" });
        let o = await qa(r);
        this.logEmitter.emit("warn", { message: `Retrying after ${o}ms`, timestamp: /* @__PURE__ */ new Date(), target: "" });
      }
    }
  }
  async handleError(t) {
    if (t instanceof ut) throw await this.uploadSchema(), new Ft({ clientVersion: this.clientVersion, cause: t });
    if (t) throw t;
  }
  applyPendingMigrations() {
    throw new Error("Method not implemented.");
  }
};
function Wa(e10) {
  if ((e10 == null ? void 0 : e10.kind) === "itx") return e10.options.id;
}
var to = k(require$$0), Ha = k(require$$1);
var eo = Symbol("PrismaLibraryEngineCache");
function Sd() {
  let e10 = globalThis;
  return e10[eo] === void 0 && (e10[eo] = {}), e10[eo];
}
function Ad(e10) {
  let t = Sd();
  if (t[e10] !== void 0) return t[e10];
  let r = Ha.default.toNamespacedPath(e10), n = { exports: {} }, i = 0;
  return process.platform !== "win32" && (i = to.default.constants.dlopen.RTLD_LAZY | to.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, r, i), t[e10] = n.exports, n.exports;
}
var Ka = { async loadLibrary(e10) {
  let t = await zn(), r = await Da("library", e10);
  try {
    return e10.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: true }, () => Ad(r));
  } catch (n) {
    let i = li({ e: n, platformInfo: t, id: r });
    throw new R(i, e10.clientVersion);
  }
} };
var ro, za = { async loadLibrary(e10) {
  let { clientVersion: t, adapter: r, engineWasm: n } = e10;
  if (r === void 0) throw new R(`The \`adapter\` option for \`PrismaClient\` is required in this context (${Tn().prettyName})`, t);
  if (n === void 0) throw new R("WASM engine was unexpectedly `undefined`", t);
  ro === void 0 && (ro = (async () => {
    let o = n.getRuntime(), s = await n.getQueryEngineWasmModule();
    if (s == null) throw new R("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", t);
    let a = { "./query_engine_bg.js": o }, l = new WebAssembly.Instance(s, a);
    return o.__wbg_set_wasm(l.exports), o.QueryEngine;
  })());
  let i = await ro;
  return { debugPanic() {
    return Promise.reject("{}");
  }, dmmf() {
    return Promise.resolve("{}");
  }, version() {
    return { commit: "unknown", version: "unknown" };
  }, QueryEngine: i };
} };
var Id = "P2036", Ae = L("prisma:client:libraryEngine");
function Od(e10) {
  return e10.item_type === "query" && "query" in e10;
}
function kd(e10) {
  return "level" in e10 ? e10.level === "error" && e10.message === "PANIC" : false;
}
var Ya = [...Qn, "native"], Ar = class {
  constructor(t, r) {
    var _a3, _b2, _c3;
    this.name = "LibraryEngine";
    this.libraryLoader = r != null ? r : Ka, t.engineWasm !== void 0 && (this.libraryLoader = r != null ? r : za), this.config = t, this.libraryStarted = false, this.logQueries = (_a3 = t.logQueries) != null ? _a3 : false, this.logLevel = (_b2 = t.logLevel) != null ? _b2 : "error", this.logEmitter = t.logEmitter, this.datamodel = t.inlineSchema, t.enableDebugLogs && (this.logLevel = "debug");
    let n = Object.keys(t.overrideDatasources)[0], i = (_c3 = t.overrideDatasources[n]) == null ? void 0 : _c3.url;
    n !== void 0 && i !== void 0 && (this.datasourceOverrides = { [n]: i }), this.libraryInstantiationPromise = this.instantiateLibrary();
  }
  async applyPendingMigrations() {
    throw new Error("Cannot call this method from this type of engine instance");
  }
  async transaction(t, r, n) {
    var _a3, _b2, _c3;
    await this.start();
    let i = JSON.stringify(r), o;
    if (t === "start") {
      let a = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel });
      o = await ((_a3 = this.engine) == null ? void 0 : _a3.startTransaction(a, i));
    } else t === "commit" ? o = await ((_b2 = this.engine) == null ? void 0 : _b2.commitTransaction(n.id, i)) : t === "rollback" && (o = await ((_c3 = this.engine) == null ? void 0 : _c3.rollbackTransaction(n.id, i)));
    let s = this.parseEngineResponse(o);
    if (Dd(s)) {
      let a = this.getExternalAdapterError(s);
      throw a ? a.error : new V(s.message, { code: s.error_code, clientVersion: this.config.clientVersion, meta: s.meta });
    }
    return s;
  }
  async instantiateLibrary() {
    if (Ae("internalSetup"), this.libraryInstantiationPromise) return this.libraryInstantiationPromise;
    Gn(), this.binaryTarget = await this.getCurrentBinaryTarget(), await this.loadEngine(), this.version();
  }
  async getCurrentBinaryTarget() {
    {
      if (this.binaryTarget) return this.binaryTarget;
      let t = await nt();
      if (!Ya.includes(t)) throw new R(`Unknown ${ce("PRISMA_QUERY_ENGINE_LIBRARY")} ${ce(H(t))}. Possible binaryTargets: ${qe(Ya.join(", "))} or a path to the query engine library.
You may have to run ${qe("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
      return t;
    }
  }
  parseEngineResponse(t) {
    if (!t) throw new B("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
    try {
      return JSON.parse(t);
    } catch {
      throw new B("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
    }
  }
  async loadEngine() {
    var _a3, _b2;
    if (!this.engine) {
      this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
      try {
        let t = new WeakRef(this), { adapter: r } = this.config;
        r && Ae("Using driver adapter: %O", r), this.engine = new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: (_a3 = this.config.logQueries) != null ? _a3 : false, ignoreEnvVarErrors: true, datasourceOverrides: (_b2 = this.datasourceOverrides) != null ? _b2 : {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json" }, (n) => {
          var _a4;
          (_a4 = t.deref()) == null ? void 0 : _a4.logger(n);
        }, r);
      } catch (t) {
        let r = t, n = this.parseInitError(r.message);
        throw typeof n == "string" ? r : new R(n.message, this.config.clientVersion, n.error_code);
      }
    }
  }
  logger(t) {
    var _a3;
    let r = this.parseEngineResponse(t);
    if (r) {
      if ("span" in r) {
        this.config.tracingHelper.createEngineSpan(r);
        return;
      }
      r.level = (_a3 = r == null ? void 0 : r.level.toLowerCase()) != null ? _a3 : "unknown", Od(r) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: r.query, params: r.params, duration: Number(r.duration_ms), target: r.module_path }) : kd(r) ? this.loggerRustPanic = new le(no(this, `${r.message}: ${r.reason} in ${r.file}:${r.line}:${r.column}`), this.config.clientVersion) : this.logEmitter.emit(r.level, { timestamp: /* @__PURE__ */ new Date(), message: r.message, target: r.module_path });
    }
  }
  parseInitError(t) {
    try {
      return JSON.parse(t);
    } catch {
    }
    return t;
  }
  parseRequestError(t) {
    try {
      return JSON.parse(t);
    } catch {
    }
    return t;
  }
  onBeforeExit() {
    throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
  }
  async start() {
    if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise) return Ae(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
    if (this.libraryStarted) return;
    let t = async () => {
      var _a3;
      Ae("library starting");
      try {
        let r = { traceparent: this.config.tracingHelper.getTraceParent() };
        await ((_a3 = this.engine) == null ? void 0 : _a3.connect(JSON.stringify(r))), this.libraryStarted = true, Ae("library started");
      } catch (r) {
        let n = this.parseInitError(r.message);
        throw typeof n == "string" ? r : new R(n.message, this.config.clientVersion, n.error_code);
      } finally {
        this.libraryStartingPromise = void 0;
      }
    };
    return this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", t), this.libraryStartingPromise;
  }
  async stop() {
    if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise) return Ae("library is already stopping"), this.libraryStoppingPromise;
    if (!this.libraryStarted) return;
    let t = async () => {
      var _a3;
      await new Promise((n) => setTimeout(n, 5)), Ae("library stopping");
      let r = { traceparent: this.config.tracingHelper.getTraceParent() };
      await ((_a3 = this.engine) == null ? void 0 : _a3.disconnect(JSON.stringify(r))), this.libraryStarted = false, this.libraryStoppingPromise = void 0, Ae("library stopped");
    };
    return this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", t), this.libraryStoppingPromise;
  }
  version() {
    var _a3, _b2, _c3;
    return this.versionInfo = (_a3 = this.library) == null ? void 0 : _a3.version(), (_c3 = (_b2 = this.versionInfo) == null ? void 0 : _b2.version) != null ? _c3 : "unknown";
  }
  debugPanic(t) {
    var _a3;
    return (_a3 = this.library) == null ? void 0 : _a3.debugPanic(t);
  }
  async request(t, { traceparent: r, interactiveTransaction: n }) {
    var _a3, _b2;
    Ae(`sending request, this.libraryStarted: ${this.libraryStarted}`);
    let i = JSON.stringify({ traceparent: r }), o = JSON.stringify(t);
    try {
      await this.start(), this.executingQueryPromise = (_a3 = this.engine) == null ? void 0 : _a3.query(o, i, n == null ? void 0 : n.id), this.lastQuery = o;
      let s = this.parseEngineResponse(await this.executingQueryPromise);
      if (s.errors) throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new B(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
      if (this.loggerRustPanic) throw this.loggerRustPanic;
      return { data: s, elapsed: 0 };
    } catch (s) {
      if (s instanceof R) throw s;
      if (s.code === "GenericFailure" && ((_b2 = s.message) == null ? void 0 : _b2.startsWith("PANIC:"))) throw new le(no(this, s.message), this.config.clientVersion);
      let a = this.parseRequestError(s.message);
      throw typeof a == "string" ? s : new B(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion });
    }
  }
  async requestBatch(t, { transaction: r, traceparent: n }) {
    Ae("requestBatch");
    let i = wt(t, r);
    await this.start(), this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: n }), Wa(r));
    let o = await this.executingQueryPromise, s = this.parseEngineResponse(o);
    if (s.errors) throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new B(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
    let { batchResult: a, errors: l } = s;
    if (Array.isArray(a)) return a.map((u) => {
      var _a3;
      return u.errors && u.errors.length > 0 ? (_a3 = this.loggerRustPanic) != null ? _a3 : this.buildQueryError(u.errors[0]) : { data: u, elapsed: 0 };
    });
    throw l && l.length === 1 ? new Error(l[0].error) : new Error(JSON.stringify(s));
  }
  buildQueryError(t) {
    if (t.user_facing_error.is_panic) return new le(no(this, t.user_facing_error.message), this.config.clientVersion);
    let r = this.getExternalAdapterError(t.user_facing_error);
    return r ? r.error : st(t, this.config.clientVersion, this.config.activeProvider);
  }
  getExternalAdapterError(t) {
    var _a3;
    if (t.error_code === Id && this.config.adapter) {
      let r = (_a3 = t.meta) == null ? void 0 : _a3.id;
      zr(typeof r == "number", "Malformed external JS error received from the engine");
      let n = this.config.adapter.errorRegistry.consumeError(r);
      return zr(n, "External error with reported id was not registered"), n;
    }
  }
  async metrics(t) {
    await this.start();
    let r = await this.engine.metrics(JSON.stringify(t));
    return t.format === "prometheus" ? r : this.parseEngineResponse(r);
  }
};
function Dd(e10) {
  return typeof e10 == "object" && e10 !== null && e10.error_code !== void 0;
}
function no(e10, t) {
  var _a3;
  return $a({ binaryTarget: e10.binaryTarget, title: t, version: e10.config.clientVersion, engineVersion: (_a3 = e10.versionInfo) == null ? void 0 : _a3.commit, database: e10.config.activeProvider, query: e10.lastQuery });
}
function Za({ copyEngine: e10 = true }, t) {
  let r;
  try {
    r = _t({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...process.env }, clientVersion: t.clientVersion });
  } catch {
  }
  e10 && (r == null ? void 0 : r.startsWith("prisma://")) && Xt("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
  let n = Kt(t.generator), i = !!((r == null ? void 0 : r.startsWith("prisma://")) || !e10), o = !!t.adapter, s = n === "library";
  if (i && o || o && false) {
    let l;
    throw e10 ? (r == null ? void 0 : r.startsWith("prisma://")) ? l = ["Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.", "Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor."] : l = ["Prisma Client was configured to use both the `adapter` and Accelerate, please chose one."] : l = ["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."], new J(l.join(`
`), { clientVersion: t.clientVersion });
  }
  if (i) return new Sr(t);
  if (s) return new Ar(t);
  throw new J("Invalid client engine type, please use `library` or `binary`", { clientVersion: t.clientVersion });
}
function In({ generator: e10 }) {
  var _a3;
  return (_a3 = e10 == null ? void 0 : e10.previewFeatures) != null ? _a3 : [];
}
function Mt(e10) {
  return e10.substring(0, 1).toLowerCase() + e10.substring(1);
}
var il = k(io());
function rl(e10, t, r) {
  let n = nl(e10), i = _d(n), o = Ld(i);
  o ? On(o, t, r) : t.addErrorMessage(() => "Unknown error");
}
function nl(e10) {
  return e10.errors.flatMap((t) => t.kind === "Union" ? nl(t) : [t]);
}
function _d(e10) {
  let t = /* @__PURE__ */ new Map(), r = [];
  for (let n of e10) {
    if (n.kind !== "InvalidArgumentType") {
      r.push(n);
      continue;
    }
    let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
    o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: Fd(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
  }
  return r.push(...t.values()), r;
}
function Fd(e10, t) {
  return [...new Set(e10.concat(t))];
}
function Ld(e10) {
  return wi(e10, (t, r) => {
    let n = el(t), i = el(r);
    return n !== i ? n - i : tl(t) - tl(r);
  });
}
function el(e10) {
  let t = 0;
  return Array.isArray(e10.selectionPath) && (t += e10.selectionPath.length), Array.isArray(e10.argumentPath) && (t += e10.argumentPath.length), t;
}
function tl(e10) {
  switch (e10.kind) {
    case "InvalidArgumentValue":
    case "ValueTooLarge":
      return 20;
    case "InvalidArgumentType":
      return 10;
    case "RequiredArgumentMissing":
      return -10;
    default:
      return 0;
  }
}
var ue = class {
  constructor(t, r) {
    this.name = t;
    this.value = r;
    this.isRequired = false;
  }
  makeRequired() {
    return this.isRequired = true, this;
  }
  write(t) {
    let { colors: { green: r } } = t.context;
    t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
  }
};
var Ir = class {
  constructor() {
    this.fields = [];
  }
  addField(t, r) {
    return this.fields.push({ write(n) {
      let { green: i, dim: o } = n.context.colors;
      n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
    } }), this;
  }
  write(t) {
    let { colors: { green: r } } = t.context;
    t.writeLine(r("{")).withIndent(() => {
      t.writeJoined(St, this.fields).newLine();
    }).write(r("}")).addMarginSymbol(r("+"));
  }
};
function On(e10, t, r) {
  switch (e10.kind) {
    case "MutuallyExclusiveFields":
      Nd(e10, t);
      break;
    case "IncludeOnScalar":
      Md(e10, t);
      break;
    case "EmptySelection":
      $d(e10, t, r);
      break;
    case "UnknownSelectionField":
      Bd(e10, t);
      break;
    case "InvalidSelectionValue":
      Ud(e10, t);
      break;
    case "UnknownArgument":
      Gd(e10, t);
      break;
    case "UnknownInputField":
      Qd(e10, t);
      break;
    case "RequiredArgumentMissing":
      Jd(e10, t);
      break;
    case "InvalidArgumentType":
      Wd(e10, t);
      break;
    case "InvalidArgumentValue":
      Hd(e10, t);
      break;
    case "ValueTooLarge":
      Kd(e10, t);
      break;
    case "SomeFieldsMissing":
      zd(e10, t);
      break;
    case "TooManyFieldsGiven":
      Yd(e10, t);
      break;
    case "Union":
      rl(e10, t, r);
      break;
    default:
      throw new Error("not implemented: " + e10.kind);
  }
}
function Nd(e10, t) {
  var _a3, _b2, _c3;
  let r = (_a3 = t.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject();
  r && ((_b2 = r.getField(e10.firstField)) == null ? void 0 : _b2.markAsError(), (_c3 = r.getField(e10.secondField)) == null ? void 0 : _c3.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e10.firstField}\``)} or ${n.green(`\`${e10.secondField}\``)}, but ${n.red("not both")} at the same time.`);
}
function Md(e10, t) {
  var _a3, _b2;
  let [r, n] = Or(e10.selectionPath), i = e10.outputType, o = (_a3 = t.arguments.getDeepSelectionParent(r)) == null ? void 0 : _a3.value;
  if (o && ((_b2 = o.getField(n)) == null ? void 0 : _b2.markAsError(), i)) for (let s of i.fields) s.isRelation && o.addSuggestion(new ue(s.name, "true"));
  t.addErrorMessage((s) => {
    let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
    return i ? a += ` on model ${s.bold(i.name)}. ${kr(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
  });
}
function $d(e10, t, r) {
  var _a3, _b2;
  let n = (_a3 = t.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject();
  if (n) {
    let i = (_b2 = n.getField("omit")) == null ? void 0 : _b2.value.asObject();
    if (i) {
      qd(e10, t, i);
      return;
    }
    if (n.hasField("select")) {
      jd(e10, t);
      return;
    }
  }
  if (r == null ? void 0 : r[Mt(e10.outputType.name)]) {
    Vd(e10, t);
    return;
  }
  t.addErrorMessage(() => `Unknown field at "${e10.selectionPath.join(".")} selection"`);
}
function qd(e10, t, r) {
  r.removeAllFields();
  for (let n of e10.outputType.fields) r.addSuggestion(new ue(n.name, "false"));
  t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e10.outputType.name)}. At least one field must be included in the result`);
}
function jd(e10, t) {
  var _a3, _b2;
  let r = e10.outputType, n = (_a3 = t.arguments.getDeepSelectionParent(e10.selectionPath)) == null ? void 0 : _a3.value, i = (_b2 = n == null ? void 0 : n.isEmpty()) != null ? _b2 : false;
  n && (n.removeAllFields(), al(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${kr(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
}
function Vd(e10, t) {
  var _a3, _b2, _c3;
  let r = new Ir();
  for (let i of e10.outputType.fields) i.isRelation || r.addField(i.name, "false");
  let n = new ue("omit", r).makeRequired();
  if (e10.selectionPath.length === 0) t.arguments.addSuggestion(n);
  else {
    let [i, o] = Or(e10.selectionPath), a = (_b2 = (_a3 = t.arguments.getDeepSelectionParent(i)) == null ? void 0 : _a3.value.asObject()) == null ? void 0 : _b2.getField(o);
    if (a) {
      let l = (_c3 = a == null ? void 0 : a.value.asObject()) != null ? _c3 : new It();
      l.addSuggestion(n), a.value = l;
    }
  }
  t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e10.outputType.name)}. At least one field must be included in the result`);
}
function Bd(e10, t) {
  let r = ll(e10.selectionPath, t);
  if (r.parentKind !== "unknown") {
    r.field.markAsError();
    let n = r.parent;
    switch (r.parentKind) {
      case "select":
        al(n, e10.outputType);
        break;
      case "include":
        Zd(n, e10.outputType);
        break;
      case "omit":
        Xd(n, e10.outputType);
        break;
    }
  }
  t.addErrorMessage((n) => {
    let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
    return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e10.outputType.name}\``)}.`), i.push(kr(n)), i.join(" ");
  });
}
function Ud(e10, t) {
  let r = ll(e10.selectionPath, t);
  r.parentKind !== "unknown" && r.field.value.markAsError(), t.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e10.underlyingError}`);
}
function Gd(e10, t) {
  var _a3, _b2;
  let r = e10.argumentPath[0], n = (_a3 = t.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject();
  n && ((_b2 = n.getField(r)) == null ? void 0 : _b2.markAsError(), em(n, e10.arguments)), t.addErrorMessage((i) => ol(i, r, e10.arguments.map((o) => o.name)));
}
function Qd(e10, t) {
  var _a3, _b2, _c3;
  let [r, n] = Or(e10.argumentPath), i = (_a3 = t.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject();
  if (i) {
    (_b2 = i.getDeepField(e10.argumentPath)) == null ? void 0 : _b2.markAsError();
    let o = (_c3 = i.getDeepFieldValue(r)) == null ? void 0 : _c3.asObject();
    o && ul(o, e10.inputType);
  }
  t.addErrorMessage((o) => ol(o, n, e10.inputType.fields.map((s) => s.name)));
}
function ol(e10, t, r) {
  let n = [`Unknown argument \`${e10.red(t)}\`.`], i = rm(t, r);
  return i && n.push(`Did you mean \`${e10.green(i)}\`?`), r.length > 0 && n.push(kr(e10)), n.join(" ");
}
function Jd(e10, t) {
  var _a3, _b2;
  let r;
  t.addErrorMessage((l) => (r == null ? void 0 : r.value) instanceof W && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
  let n = (_a3 = t.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject();
  if (!n) return;
  let [i, o] = Or(e10.argumentPath), s = new Ir(), a = (_b2 = n.getDeepFieldValue(i)) == null ? void 0 : _b2.asObject();
  if (a) if (r = a.getField(o), r && a.removeField(o), e10.inputTypes.length === 1 && e10.inputTypes[0].kind === "object") {
    for (let l of e10.inputTypes[0].fields) s.addField(l.name, l.typeNames.join(" | "));
    a.addSuggestion(new ue(o, s).makeRequired());
  } else {
    let l = e10.inputTypes.map(sl).join(" | ");
    a.addSuggestion(new ue(o, l).makeRequired());
  }
}
function sl(e10) {
  return e10.kind === "list" ? `${sl(e10.elementType)}[]` : e10.name;
}
function Wd(e10, t) {
  var _a3, _b2;
  let r = e10.argument.name, n = (_a3 = t.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject();
  n && ((_b2 = n.getDeepFieldValue(e10.argumentPath)) == null ? void 0 : _b2.markAsError()), t.addErrorMessage((i) => {
    let o = kn("or", e10.argument.typeNames.map((s) => i.green(s)));
    return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e10.inferredType)}.`;
  });
}
function Hd(e10, t) {
  var _a3, _b2;
  let r = e10.argument.name, n = (_a3 = t.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject();
  n && ((_b2 = n.getDeepFieldValue(e10.argumentPath)) == null ? void 0 : _b2.markAsError()), t.addErrorMessage((i) => {
    let o = [`Invalid value for argument \`${i.bold(r)}\``];
    if (e10.underlyingError && o.push(`: ${e10.underlyingError}`), o.push("."), e10.argument.typeNames.length > 0) {
      let s = kn("or", e10.argument.typeNames.map((a) => i.green(a)));
      o.push(` Expected ${s}.`);
    }
    return o.join("");
  });
}
function Kd(e10, t) {
  var _a3, _b2;
  let r = e10.argument.name, n = (_a3 = t.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject(), i;
  if (n) {
    let s = (_b2 = n.getDeepField(e10.argumentPath)) == null ? void 0 : _b2.value;
    s == null ? void 0 : s.markAsError(), s instanceof W && (i = s.text);
  }
  t.addErrorMessage((o) => {
    let s = ["Unable to fit value"];
    return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
  });
}
function zd(e10, t) {
  var _a3, _b2;
  let r = e10.argumentPath[e10.argumentPath.length - 1], n = (_a3 = t.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject();
  if (n) {
    let i = (_b2 = n.getDeepFieldValue(e10.argumentPath)) == null ? void 0 : _b2.asObject();
    i && ul(i, e10.inputType);
  }
  t.addErrorMessage((i) => {
    let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e10.inputType.name)} needs`];
    return e10.constraints.minFieldCount === 1 ? e10.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${kn("or", e10.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e10.constraints.minFieldCount}`)} arguments.`), o.push(kr(i)), o.join(" ");
  });
}
function Yd(e10, t) {
  var _a3, _b2;
  let r = e10.argumentPath[e10.argumentPath.length - 1], n = (_a3 = t.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject(), i = [];
  if (n) {
    let o = (_b2 = n.getDeepFieldValue(e10.argumentPath)) == null ? void 0 : _b2.asObject();
    o && (o.markAsError(), i = Object.keys(o.getFields()));
  }
  t.addErrorMessage((o) => {
    let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e10.inputType.name)} needs`];
    return e10.constraints.minFieldCount === 1 && e10.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e10.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e10.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${kn("and", i.map((a) => o.red(a)))}. Please choose`), e10.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e10.constraints.maxFieldCount}.`), s.join(" ");
  });
}
function al(e10, t) {
  for (let r of t.fields) e10.hasField(r.name) || e10.addSuggestion(new ue(r.name, "true"));
}
function Zd(e10, t) {
  for (let r of t.fields) r.isRelation && !e10.hasField(r.name) && e10.addSuggestion(new ue(r.name, "true"));
}
function Xd(e10, t) {
  for (let r of t.fields) !e10.hasField(r.name) && !r.isRelation && e10.addSuggestion(new ue(r.name, "true"));
}
function em(e10, t) {
  for (let r of t) e10.hasField(r.name) || e10.addSuggestion(new ue(r.name, r.typeNames.join(" | ")));
}
function ll(e10, t) {
  var _a3, _b2, _c3, _d2;
  let [r, n] = Or(e10), i = (_a3 = t.arguments.getDeepSubSelectionValue(r)) == null ? void 0 : _a3.asObject();
  if (!i) return { parentKind: "unknown", fieldName: n };
  let o = (_b2 = i.getFieldValue("select")) == null ? void 0 : _b2.asObject(), s = (_c3 = i.getFieldValue("include")) == null ? void 0 : _c3.asObject(), a = (_d2 = i.getFieldValue("omit")) == null ? void 0 : _d2.asObject(), l = o == null ? void 0 : o.getField(n);
  return o && l ? { parentKind: "select", parent: o, field: l, fieldName: n } : (l = s == null ? void 0 : s.getField(n), s && l ? { parentKind: "include", field: l, parent: s, fieldName: n } : (l = a == null ? void 0 : a.getField(n), a && l ? { parentKind: "omit", field: l, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
}
function ul(e10, t) {
  if (t.kind === "object") for (let r of t.fields) e10.hasField(r.name) || e10.addSuggestion(new ue(r.name, r.typeNames.join(" | ")));
}
function Or(e10) {
  let t = [...e10], r = t.pop();
  if (!r) throw new Error("unexpected empty path");
  return [t, r];
}
function kr({ green: e10, enabled: t }) {
  return "Available options are " + (t ? `listed in ${e10("green")}` : "marked with ?") + ".";
}
function kn(e10, t) {
  if (t.length === 1) return t[0];
  let r = [...t], n = r.pop();
  return `${r.join(", ")} ${e10} ${n}`;
}
var tm = 3;
function rm(e10, t) {
  let r = 1 / 0, n;
  for (let i of t) {
    let o = (0, il.default)(e10, i);
    o > tm || o < r && (r = o, n = i);
  }
  return n;
}
function Dn({ args: e10, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
  let a = Ot(e10);
  for (let p of t) On(p, a, s);
  let { message: l, args: u } = yn(a, r), c = Dt({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: u });
  throw new J(c, { clientVersion: o });
}
var nm = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" }, cl = "explicitly `undefined` values are not allowed";
function pl({ modelName: e10, action: t, args: r, runtimeDataModel: n, extensions: i, callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c }) {
  let p = new oo({ runtimeDataModel: n, modelName: e10, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c });
  return { modelName: e10, action: nm[t], query: Dr(r, p) };
}
function Dr({ select: e10, include: t, ...r } = {}, n) {
  let i;
  return n.isPreviewFeatureOn("omitApi") && (i = r.omit, delete r.omit), { arguments: ml(r, n), selection: im(e10, t, i, n) };
}
function im(e10, t, r, n) {
  return e10 ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.isPreviewFeatureOn("omitApi") && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), lm(e10, n)) : om(n, t, r);
}
function om(e10, t, r) {
  let n = {};
  return e10.modelOrType && !e10.isRawAction() && (n.$composites = true, n.$scalars = true), t && sm(n, t, e10), e10.isPreviewFeatureOn("omitApi") && am(n, r, e10), n;
}
function sm(e10, t, r) {
  for (let [n, i] of Object.entries(t)) {
    if (xe(i)) continue;
    let o = r.nestSelection(n);
    if (so(i, o), i === false || i === void 0) {
      e10[n] = false;
      continue;
    }
    let s = r.findField(n);
    if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
      e10[n] = Dr(i === true ? {} : i, o);
      continue;
    }
    if (i === true) {
      e10[n] = true;
      continue;
    }
    e10[n] = Dr(i, o);
  }
}
function am(e10, t, r) {
  let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t }, o = xa(i, n);
  for (let [s, a] of Object.entries(o)) {
    if (xe(a)) continue;
    so(a, r.nestSelection(s));
    let l = r.findField(s);
    (n == null ? void 0 : n[s]) && !l || (e10[s] = !a);
  }
}
function lm(e10, t) {
  let r = {}, n = t.getComputedFields(), i = wa(e10, n);
  for (let [o, s] of Object.entries(i)) {
    if (xe(s)) continue;
    let a = t.nestSelection(o);
    so(s, a);
    let l = t.findField(o);
    if (!((n == null ? void 0 : n[o]) && !l)) {
      if (s === false || s === void 0 || xe(s)) {
        r[o] = false;
        continue;
      }
      if (s === true) {
        (l == null ? void 0 : l.kind) === "object" ? r[o] = Dr({}, a) : r[o] = true;
        continue;
      }
      r[o] = Dr(s, a);
    }
  }
  return r;
}
function dl(e10, t) {
  if (e10 === null) return null;
  if (typeof e10 == "string" || typeof e10 == "number" || typeof e10 == "boolean") return e10;
  if (typeof e10 == "bigint") return { $type: "BigInt", value: String(e10) };
  if (Pt(e10)) {
    if (on(e10)) return { $type: "DateTime", value: e10.toISOString() };
    t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
  }
  if (Ct(e10)) return { $type: "FieldRef", value: { _ref: e10.name, _container: e10.modelName } };
  if (Array.isArray(e10)) return um(e10, t);
  if (ArrayBuffer.isView(e10)) return { $type: "Bytes", value: Buffer.from(e10).toString("base64") };
  if (cm(e10)) return e10.values;
  if (Rt(e10)) return { $type: "Decimal", value: e10.toFixed() };
  if (e10 instanceof Ne) {
    if (e10 !== en.instances[e10._getName()]) throw new Error("Invalid ObjectEnumValue");
    return { $type: "Enum", value: e10._getName() };
  }
  if (pm(e10)) return e10.toJSON();
  if (typeof e10 == "object") return ml(e10, t);
  t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e10)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
}
function ml(e10, t) {
  if (e10.$type) return { $type: "Raw", value: e10 };
  let r = {};
  for (let n in e10) {
    let i = e10[n], o = t.nestArgument(n);
    xe(i) || (i !== void 0 ? r[n] = dl(i, o) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: cl }));
  }
  return r;
}
function um(e10, t) {
  let r = [];
  for (let n = 0; n < e10.length; n++) {
    let i = t.nestArgument(String(n)), o = e10[n];
    if (o === void 0 || xe(o)) {
      let s = o === void 0 ? "undefined" : "Prisma.skip";
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
    }
    r.push(dl(o, i));
  }
  return r;
}
function cm(e10) {
  return typeof e10 == "object" && e10 !== null && e10.__prismaRawParameters__ === true;
}
function pm(e10) {
  return typeof e10 == "object" && e10 !== null && typeof e10.toJSON == "function";
}
function so(e10, t) {
  e10 === void 0 && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: cl });
}
var oo = class e9 {
  constructor(t) {
    var _a3;
    this.params = t;
    this.params.modelName && (this.modelOrType = (_a3 = this.params.runtimeDataModel.models[this.params.modelName]) != null ? _a3 : this.params.runtimeDataModel.types[this.params.modelName]);
  }
  throwValidationError(t) {
    var _a3;
    Dn({ errors: [t], originalMethod: this.params.originalMethod, args: (_a3 = this.params.rootArgs) != null ? _a3 : {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
  }
  getSelectionPath() {
    return this.params.selectionPath;
  }
  getArgumentPath() {
    return this.params.argumentPath;
  }
  getArgumentName() {
    return this.params.argumentPath[this.params.argumentPath.length - 1];
  }
  getOutputTypeDescription() {
    if (!(!this.params.modelName || !this.modelOrType)) return { name: this.params.modelName, fields: this.modelOrType.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
  }
  isRawAction() {
    return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
  }
  isPreviewFeatureOn(t) {
    return this.params.previewFeatures.includes(t);
  }
  getComputedFields() {
    if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
  }
  findField(t) {
    var _a3;
    return (_a3 = this.modelOrType) == null ? void 0 : _a3.fields.find((r) => r.name === t);
  }
  nestSelection(t) {
    let r = this.findField(t), n = (r == null ? void 0 : r.kind) === "object" ? r.type : void 0;
    return new e9({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
  }
  getGlobalOmit() {
    var _a3, _b2;
    return this.params.modelName && this.shouldApplyGlobalOmit() ? (_b2 = (_a3 = this.params.globalOmit) == null ? void 0 : _a3[Mt(this.params.modelName)]) != null ? _b2 : {} : {};
  }
  shouldApplyGlobalOmit() {
    switch (this.params.action) {
      case "findFirst":
      case "findFirstOrThrow":
      case "findUniqueOrThrow":
      case "findMany":
      case "upsert":
      case "findUnique":
      case "createManyAndReturn":
      case "create":
      case "update":
      case "delete":
        return true;
      case "executeRaw":
      case "aggregateRaw":
      case "runCommandRaw":
      case "findRaw":
      case "createMany":
      case "deleteMany":
      case "groupBy":
      case "updateMany":
      case "count":
      case "aggregate":
      case "queryRaw":
        return false;
      default:
        Fe(this.params.action, "Unknown action");
    }
  }
  nestArgument(t) {
    return new e9({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
  }
};
var fl = (e10) => ({ command: e10 });
var gl = (e10) => e10.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
function $t(e10) {
  try {
    return hl(e10, "fast");
  } catch {
    return hl(e10, "slow");
  }
}
function hl(e10, t) {
  return JSON.stringify(e10.map((r) => bl(r, t)));
}
function bl(e10, t) {
  return Array.isArray(e10) ? e10.map((r) => bl(r, t)) : typeof e10 == "bigint" ? { prisma__type: "bigint", prisma__value: e10.toString() } : Pt(e10) ? { prisma__type: "date", prisma__value: e10.toJSON() } : Re.isDecimal(e10) ? { prisma__type: "decimal", prisma__value: e10.toJSON() } : Buffer.isBuffer(e10) ? { prisma__type: "bytes", prisma__value: e10.toString("base64") } : dm(e10) || ArrayBuffer.isView(e10) ? { prisma__type: "bytes", prisma__value: Buffer.from(e10).toString("base64") } : typeof e10 == "object" && t === "slow" ? El(e10) : e10;
}
function dm(e10) {
  return e10 instanceof ArrayBuffer || e10 instanceof SharedArrayBuffer ? true : typeof e10 == "object" && e10 !== null ? e10[Symbol.toStringTag] === "ArrayBuffer" || e10[Symbol.toStringTag] === "SharedArrayBuffer" : false;
}
function El(e10) {
  if (typeof e10 != "object" || e10 === null) return e10;
  if (typeof e10.toJSON == "function") return e10.toJSON();
  if (Array.isArray(e10)) return e10.map(yl);
  let t = {};
  for (let r of Object.keys(e10)) t[r] = yl(e10[r]);
  return t;
}
function yl(e10) {
  return typeof e10 == "bigint" ? e10.toString() : El(e10);
}
var mm = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"], wl = mm;
var fm = /^(\s*alter\s)/i, xl = L("prisma:client");
function ao(e10, t, r, n) {
  if (!(e10 !== "postgresql" && e10 !== "cockroachdb") && r.length > 0 && fm.exec(t)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var lo = ({ clientMethod: e10, activeProvider: t }) => (r) => {
  let n = "", i;
  if (r instanceof sr) n = r.sql, i = { values: $t(r.values), __prismaRawParameters__: true };
  else if (Array.isArray(r)) {
    let [o, ...s] = r;
    n = o, i = { values: $t(s || []), __prismaRawParameters__: true };
  } else switch (t) {
    case "sqlite":
    case "mysql": {
      n = r.sql, i = { values: $t(r.values), __prismaRawParameters__: true };
      break;
    }
    case "cockroachdb":
    case "postgresql":
    case "postgres": {
      n = r.text, i = { values: $t(r.values), __prismaRawParameters__: true };
      break;
    }
    case "sqlserver": {
      n = gl(r), i = { values: $t(r.values), __prismaRawParameters__: true };
      break;
    }
    default:
      throw new Error(`The ${t} provider does not support ${e10}`);
  }
  return (i == null ? void 0 : i.values) ? xl(`prisma.${e10}(${n}, ${i.values})`) : xl(`prisma.${e10}(${n})`), { query: n, parameters: i };
}, Pl = { requestArgsToMiddlewareArgs(e10) {
  return [e10.strings, ...e10.values];
}, middlewareArgsToRequestArgs(e10) {
  let [t, ...r] = e10;
  return new ie(t, r);
} }, vl = { requestArgsToMiddlewareArgs(e10) {
  return [e10];
}, middlewareArgsToRequestArgs(e10) {
  return e10[0];
} };
function uo(e10) {
  return function(r) {
    let n, i = (o = e10) => {
      try {
        return o === void 0 || (o == null ? void 0 : o.kind) === "itx" ? n != null ? n : n = Tl(r(o)) : Tl(r(o));
      } catch (s) {
        return Promise.reject(s);
      }
    };
    return { then(o, s) {
      return i().then(o, s);
    }, catch(o) {
      return i().catch(o);
    }, finally(o) {
      return i().finally(o);
    }, requestTransaction(o) {
      let s = i(o);
      return s.requestTransaction ? s.requestTransaction(o) : s;
    }, [Symbol.toStringTag]: "PrismaPromise" };
  };
}
function Tl(e10) {
  return typeof e10.then == "function" ? e10 : Promise.resolve(e10);
}
var Rl = { isEnabled() {
  return false;
}, getTraceParent() {
  return "00-10-10-00";
}, async createEngineSpan() {
}, getActiveContext() {
}, runInChildSpan(e10, t) {
  return t();
} }, co = class {
  isEnabled() {
    return this.getGlobalTracingHelper().isEnabled();
  }
  getTraceParent(t) {
    return this.getGlobalTracingHelper().getTraceParent(t);
  }
  createEngineSpan(t) {
    return this.getGlobalTracingHelper().createEngineSpan(t);
  }
  getActiveContext() {
    return this.getGlobalTracingHelper().getActiveContext();
  }
  runInChildSpan(t, r) {
    return this.getGlobalTracingHelper().runInChildSpan(t, r);
  }
  getGlobalTracingHelper() {
    var _a3, _b2;
    return (_b2 = (_a3 = globalThis.PRISMA_INSTRUMENTATION) == null ? void 0 : _a3.helper) != null ? _b2 : Rl;
  }
};
function Cl(e10) {
  return e10.includes("tracing") ? new co() : Rl;
}
function Sl(e10, t = () => {
}) {
  let r, n = new Promise((i) => r = i);
  return { then(i) {
    return --e10 === 0 && r(t()), i == null ? void 0 : i(n);
  } };
}
function Al(e10) {
  return typeof e10 == "string" ? e10 : e10.reduce((t, r) => {
    let n = typeof r == "string" ? r : r.level;
    return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
  }, void 0);
}
var _n = class {
  constructor() {
    this._middlewares = [];
  }
  use(t) {
    this._middlewares.push(t);
  }
  get(t) {
    return this._middlewares[t];
  }
  has(t) {
    return !!this._middlewares[t];
  }
  length() {
    return this._middlewares.length;
  }
};
var kl = k(yi());
function Fn(e10) {
  return typeof e10.batchRequestIdx == "number";
}
function Ln(e10) {
  return e10 === null ? e10 : Array.isArray(e10) ? e10.map(Ln) : typeof e10 == "object" ? gm(e10) ? hm(e10) : yt(e10, Ln) : e10;
}
function gm(e10) {
  return e10 !== null && typeof e10 == "object" && typeof e10.$type == "string";
}
function hm({ $type: e10, value: t }) {
  switch (e10) {
    case "BigInt":
      return BigInt(t);
    case "Bytes":
      return Buffer.from(t, "base64");
    case "DateTime":
      return new Date(t);
    case "Decimal":
      return new Re(t);
    case "Json":
      return JSON.parse(t);
    default:
      Fe(t, "Unknown tagged value");
  }
}
function Il(e10) {
  if (e10.action !== "findUnique" && e10.action !== "findUniqueOrThrow") return;
  let t = [];
  return e10.modelName && t.push(e10.modelName), e10.query.arguments && t.push(po(e10.query.arguments)), t.push(po(e10.query.selection)), t.join("");
}
function po(e10) {
  return `(${Object.keys(e10).sort().map((r) => {
    let n = e10[r];
    return typeof n == "object" && n !== null ? `(${r} ${po(n)})` : r;
  }).join(" ")})`;
}
var ym = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
function mo(e10) {
  return ym[e10];
}
var Nn = class {
  constructor(t) {
    this.options = t;
    this.tickActive = false;
    this.batches = {};
  }
  request(t) {
    let r = this.options.batchBy(t);
    return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
      this.dispatchBatches(), this.tickActive = false;
    }))), new Promise((n, i) => {
      this.batches[r].push({ request: t, resolve: n, reject: i });
    })) : this.options.singleLoader(t);
  }
  dispatchBatches() {
    for (let t in this.batches) {
      let r = this.batches[t];
      delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
        n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
      }).catch((n) => {
        r[0].reject(n);
      }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
        if (n instanceof Error) for (let i = 0; i < r.length; i++) r[i].reject(n);
        else for (let i = 0; i < r.length; i++) {
          let o = n[i];
          o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
        }
      }).catch((n) => {
        for (let i = 0; i < r.length; i++) r[i].reject(n);
      }));
    }
  }
  get [Symbol.toStringTag]() {
    return "DataLoader";
  }
};
function pt(e10, t) {
  if (t === null) return t;
  switch (e10) {
    case "bigint":
      return BigInt(t);
    case "bytes":
      return Buffer.from(t, "base64");
    case "decimal":
      return new Re(t);
    case "datetime":
    case "date":
      return new Date(t);
    case "time":
      return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
    case "bigint-array":
      return t.map((r) => pt("bigint", r));
    case "bytes-array":
      return t.map((r) => pt("bytes", r));
    case "decimal-array":
      return t.map((r) => pt("decimal", r));
    case "datetime-array":
      return t.map((r) => pt("datetime", r));
    case "date-array":
      return t.map((r) => pt("date", r));
    case "time-array":
      return t.map((r) => pt("time", r));
    default:
      return t;
  }
}
function Ol(e10) {
  let t = [], r = bm(e10);
  for (let n = 0; n < e10.rows.length; n++) {
    let i = e10.rows[n], o = { ...r };
    for (let s = 0; s < i.length; s++) o[e10.columns[s]] = pt(e10.types[s], i[s]);
    t.push(o);
  }
  return t;
}
function bm(e10) {
  let t = {};
  for (let r = 0; r < e10.columns.length; r++) t[e10.columns[r]] = null;
  return t;
}
var Em = L("prisma:client:request_handler"), Mn = class {
  constructor(t, r) {
    this.logEmitter = r, this.client = t, this.dataloader = new Nn({ batchLoader: ga(async ({ requests: n, customDataProxyFetch: i }) => {
      let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p) => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p) => mo(p.protocolQuery.action));
      return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: wm(o), containsWrite: u, customDataProxyFetch: i })).map((p, d) => {
        if (p instanceof Error) return p;
        try {
          return this.mapQueryEngineResult(n[d], p);
        } catch (f) {
          return f;
        }
      });
    }), singleLoader: async (n) => {
      var _a3;
      let i = ((_a3 = n.transaction) == null ? void 0 : _a3.kind) === "itx" ? Dl(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: mo(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
      return this.mapQueryEngineResult(n, o);
    }, batchBy: (n) => {
      var _a3;
      return ((_a3 = n.transaction) == null ? void 0 : _a3.id) ? `transaction-${n.transaction.id}` : Il(n.protocolQuery);
    }, batchOrder(n, i) {
      var _a3, _b2;
      return ((_a3 = n.transaction) == null ? void 0 : _a3.kind) === "batch" && ((_b2 = i.transaction) == null ? void 0 : _b2.kind) === "batch" ? n.transaction.index - i.transaction.index : 0;
    } });
  }
  async request(t) {
    try {
      return await this.dataloader.request(t);
    } catch (r) {
      let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
      this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t.globalOmit });
    }
  }
  mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
    let i = n == null ? void 0 : n.data, o = n == null ? void 0 : n.elapsed, s = this.unpack(i, t, r);
    return process.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
  }
  handleAndLogRequestError(t) {
    try {
      this.handleRequestError(t);
    } catch (r) {
      throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
    }
  }
  handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
    if (Em(t), xm(t, i) || t instanceof Le) throw t;
    if (t instanceof V && Pm(t)) {
      let u = _l(t.meta);
      Dn({ args: o, errors: [u], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
    }
    let l = t.message;
    if (n && (l = Dt({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: l })), l = this.sanitizeMessage(l), t.code) {
      let u = s ? { modelName: s, ...t.meta } : t.meta;
      throw new V(l, { code: t.code, clientVersion: this.client._clientVersion, meta: u, batchRequestIdx: t.batchRequestIdx });
    } else {
      if (t.isPanic) throw new le(l, this.client._clientVersion);
      if (t instanceof B) throw new B(l, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
      if (t instanceof R) throw new R(l, this.client._clientVersion);
      if (t instanceof le) throw new le(l, this.client._clientVersion);
    }
    throw t.clientVersion = this.client._clientVersion, t;
  }
  sanitizeMessage(t) {
    return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, kl.default)(t) : t;
  }
  unpack(t, r, n) {
    if (!t || (t.data && (t = t.data), !t)) return t;
    let i = Object.keys(t)[0], o = Object.values(t)[0], s = r.filter((u) => u !== "select" && u !== "include"), a = qi(o, s), l = i === "queryRaw" ? Ol(a) : Ln(a);
    return n ? n(l) : l;
  }
  get [Symbol.toStringTag]() {
    return "RequestHandler";
  }
};
function wm(e10) {
  if (e10) {
    if (e10.kind === "batch") return { kind: "batch", options: { isolationLevel: e10.isolationLevel } };
    if (e10.kind === "itx") return { kind: "itx", options: Dl(e10) };
    Fe(e10, "Unknown transaction kind");
  }
}
function Dl(e10) {
  return { id: e10.id, payload: e10.payload };
}
function xm(e10, t) {
  return Fn(e10) && (t == null ? void 0 : t.kind) === "batch" && e10.batchRequestIdx !== t.index;
}
function Pm(e10) {
  return e10.code === "P2009" || e10.code === "P2012";
}
function _l(e10) {
  if (e10.kind === "Union") return { kind: "Union", errors: e10.errors.map(_l) };
  if (Array.isArray(e10.selectionPath)) {
    let [, ...t] = e10.selectionPath;
    return { ...e10, selectionPath: t };
  }
  return e10;
}
var Fl = "5.20.0";
var Ll = Fl;
var jl = k(io());
var F = class extends Error {
  constructor(t) {
    super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientConstructorValidationError";
  }
};
w(F, "PrismaClientConstructorValidationError");
var Nl = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"], Ml = ["pretty", "colorless", "minimal"], $l = ["info", "query", "warn", "error"], Tm = { datasources: (e10, { datasourceNames: t }) => {
  if (e10) {
    if (typeof e10 != "object" || Array.isArray(e10)) throw new F(`Invalid value ${JSON.stringify(e10)} for "datasources" provided to PrismaClient constructor`);
    for (let [r, n] of Object.entries(e10)) {
      if (!t.includes(r)) {
        let i = qt(r, t) || ` Available datasources: ${t.join(", ")}`;
        throw new F(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
      }
      if (typeof n != "object" || Array.isArray(n)) throw new F(`Invalid value ${JSON.stringify(e10)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
      if (n && typeof n == "object") for (let [i, o] of Object.entries(n)) {
        if (i !== "url") throw new F(`Invalid value ${JSON.stringify(e10)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
        if (typeof o != "string") throw new F(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
      }
    }
  }
}, adapter: (e10, t) => {
  if (e10 === null) return;
  if (e10 === void 0) throw new F('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
  if (!In(t).includes("driverAdapters")) throw new F('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
  if (Kt() === "binary") throw new F('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
}, datasourceUrl: (e10) => {
  if (typeof e10 < "u" && typeof e10 != "string") throw new F(`Invalid value ${JSON.stringify(e10)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
}, errorFormat: (e10) => {
  if (e10) {
    if (typeof e10 != "string") throw new F(`Invalid value ${JSON.stringify(e10)} for "errorFormat" provided to PrismaClient constructor.`);
    if (!Ml.includes(e10)) {
      let t = qt(e10, Ml);
      throw new F(`Invalid errorFormat ${e10} provided to PrismaClient constructor.${t}`);
    }
  }
}, log: (e10) => {
  if (!e10) return;
  if (!Array.isArray(e10)) throw new F(`Invalid value ${JSON.stringify(e10)} for "log" provided to PrismaClient constructor.`);
  function t(r) {
    if (typeof r == "string" && !$l.includes(r)) {
      let n = qt(r, $l);
      throw new F(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
    }
  }
  for (let r of e10) {
    t(r);
    let n = { level: t, emit: (i) => {
      let o = ["stdout", "event"];
      if (!o.includes(i)) {
        let s = qt(i, o);
        throw new F(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
      }
    } };
    if (r && typeof r == "object") for (let [i, o] of Object.entries(r)) if (n[i]) n[i](o);
    else throw new F(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
  }
}, transactionOptions: (e10) => {
  if (!e10) return;
  let t = e10.maxWait;
  if (t != null && t <= 0) throw new F(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
  let r = e10.timeout;
  if (r != null && r <= 0) throw new F(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
}, omit: (e10, t) => {
  if (typeof e10 != "object") throw new F('"omit" option is expected to be an object.');
  if (e10 === null) throw new F('"omit" option can not be `null`');
  let r = [];
  for (let [n, i] of Object.entries(e10)) {
    let o = Cm(n, t.runtimeDataModel);
    if (!o) {
      r.push({ kind: "UnknownModel", modelKey: n });
      continue;
    }
    for (let [s, a] of Object.entries(i)) {
      let l = o.fields.find((u) => u.name === s);
      if (!l) {
        r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
        continue;
      }
      if (l.relationName) {
        r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
        continue;
      }
      typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
    }
  }
  if (r.length > 0) throw new F(Sm(e10, r));
}, __internal: (e10) => {
  if (!e10) return;
  let t = ["debug", "engine", "configOverride"];
  if (typeof e10 != "object") throw new F(`Invalid value ${JSON.stringify(e10)} for "__internal" to PrismaClient constructor`);
  for (let [r] of Object.entries(e10)) if (!t.includes(r)) {
    let n = qt(r, t);
    throw new F(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
  }
} };
function Vl(e10, t) {
  for (let [r, n] of Object.entries(e10)) {
    if (!Nl.includes(r)) {
      let i = qt(r, Nl);
      throw new F(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
    }
    Tm[r](n, t);
  }
  if (e10.datasourceUrl && e10.datasources) throw new F('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
}
function qt(e10, t) {
  if (t.length === 0 || typeof e10 != "string") return "";
  let r = Rm(e10, t);
  return r ? ` Did you mean "${r}"?` : "";
}
function Rm(e10, t) {
  if (t.length === 0) return null;
  let r = t.map((i) => ({ value: i, distance: (0, jl.default)(e10, i) }));
  r.sort((i, o) => i.distance < o.distance ? -1 : 1);
  let n = r[0];
  return n.distance < 3 ? n.value : null;
}
function Cm(e10, t) {
  var _a3;
  return (_a3 = ql(t.models, e10)) != null ? _a3 : ql(t.types, e10);
}
function ql(e10, t) {
  let r = Object.keys(e10).find((n) => Mt(n) === t);
  if (r) return e10[r];
}
function Sm(e10, t) {
  var _a3, _b2, _c3, _d2;
  let r = Ot(e10);
  for (let o of t) switch (o.kind) {
    case "UnknownModel":
      (_a3 = r.arguments.getField(o.modelKey)) == null ? void 0 : _a3.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
      break;
    case "UnknownField":
      (_b2 = r.arguments.getDeepField([o.modelKey, o.fieldName])) == null ? void 0 : _b2.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
      break;
    case "RelationInOmit":
      (_c3 = r.arguments.getDeepField([o.modelKey, o.fieldName])) == null ? void 0 : _c3.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
      break;
    case "InvalidFieldValue":
      (_d2 = r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])) == null ? void 0 : _d2.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
      break;
  }
  let { message: n, args: i } = yn(r, "colorless");
  return `Error validating "omit" option:

${i}

${n}`;
}
function Bl(e10) {
  return e10.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
    let n = new Array(e10.length), i = null, o = false, s = 0, a = () => {
      o || (s++, s === e10.length && (o = true, i ? r(i) : t(n)));
    }, l = (u) => {
      o || (o = true, r(u));
    };
    for (let u = 0; u < e10.length; u++) e10[u].then((c) => {
      n[u] = c, a();
    }, (c) => {
      if (!Fn(c)) {
        l(c);
        return;
      }
      c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
    });
  });
}
var tt = L("prisma:client");
typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
var Am = { requestArgsToMiddlewareArgs: (e10) => e10, middlewareArgsToRequestArgs: (e10) => e10 }, Im = Symbol.for("prisma.client.transaction.id"), Om = { id: 0, nextId() {
  return ++this.id;
} };
function Hl(e10) {
  class t {
    constructor(n) {
      var _a3, _b2, _c3, _d2, _e2, _f2, _g, _h, _i2, _j, _k, _l2, _m2, _n2;
      this._originalClient = this;
      this._middlewares = new _n();
      this._createPrismaPromise = uo();
      this.$extends = aa;
      e10 = (_c3 = (_b2 = (_a3 = n == null ? void 0 : n.__internal) == null ? void 0 : _a3.configOverride) == null ? void 0 : _b2.call(_a3, e10)) != null ? _c3 : e10, Ta(e10), n && Vl(n, e10);
      let i = new Jl.EventEmitter().on("error", () => {
      });
      this._extensions = vn.empty(), this._previewFeatures = In(e10), this._clientVersion = (_d2 = e10.clientVersion) != null ? _d2 : Ll, this._activeProvider = e10.activeProvider, this._globalOmit = n == null ? void 0 : n.omit, this._tracingHelper = Cl(this._previewFeatures);
      let o = { rootEnvPath: e10.relativeEnvPaths.rootEnvPath && _r.default.resolve(e10.dirname, e10.relativeEnvPaths.rootEnvPath), schemaEnvPath: e10.relativeEnvPaths.schemaEnvPath && _r.default.resolve(e10.dirname, e10.relativeEnvPaths.schemaEnvPath) }, s;
      if (n == null ? void 0 : n.adapter) {
        s = Si(n.adapter);
        let l = e10.activeProvider === "postgresql" ? "postgres" : e10.activeProvider;
        if (s.provider !== l) throw new R(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion);
        if (n.datasources || n.datasourceUrl !== void 0) throw new R("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
      }
      let a = !s && Ht(o, { conflictCheck: "none" }) || ((_e2 = e10.injectableEdgeEnv) == null ? void 0 : _e2.call(e10));
      try {
        let l = n != null ? n : {}, u = (_f2 = l.__internal) != null ? _f2 : {}, c = u.debug === true;
        c && L.enable("prisma:client");
        let p = _r.default.resolve(e10.dirname, e10.relativePath);
        Wl.default.existsSync(p) || (p = e10.dirname), tt("dirname", e10.dirname), tt("relativePath", e10.relativePath), tt("cwd", p);
        let d = u.engine || {};
        if (l.errorFormat ? this._errorFormat = l.errorFormat : true ? this._errorFormat = "minimal" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e10.runtimeDataModel, this._engineConfig = { cwd: p, dirname: e10.dirname, enableDebugLogs: c, allowTriggerPanic: d.allowTriggerPanic, datamodelPath: _r.default.join(e10.dirname, (_g = e10.filename) != null ? _g : "schema.prisma"), prismaPath: (_h = d.binaryPath) != null ? _h : void 0, engineEndpoint: d.endpoint, generator: e10.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && Al(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((f) => typeof f == "string" ? f === "query" : f.level === "query")), env: (_i2 = a == null ? void 0 : a.parsed) != null ? _i2 : {}, flags: [], engineWasm: e10.engineWasm, clientVersion: e10.clientVersion, engineVersion: e10.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e10.activeProvider, inlineSchema: e10.inlineSchema, overrideDatasources: Ra(l, e10.datasourceNames), inlineDatasources: e10.inlineDatasources, inlineSchemaHash: e10.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: (_k = (_j = l.transactionOptions) == null ? void 0 : _j.maxWait) != null ? _k : 2e3, timeout: (_m2 = (_l2 = l.transactionOptions) == null ? void 0 : _l2.timeout) != null ? _m2 : 5e3, isolationLevel: (_n2 = l.transactionOptions) == null ? void 0 : _n2.isolationLevel }, logEmitter: i, isBundled: e10.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: _t, getBatchRequestPayload: wt, prismaGraphQLToJSError: st, PrismaClientUnknownRequestError: B, PrismaClientInitializationError: R, PrismaClientKnownRequestError: V, debug: L("prisma:client:accelerateEngine"), engineVersion: Gl.version, clientVersion: e10.clientVersion } }, tt("clientVersion", e10.clientVersion), this._engine = Za(e10, this._engineConfig), this._requestHandler = new Mn(this, i), l.log) for (let f of l.log) {
          let g = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
          g && this.$on(g, (h) => {
            var _a4;
            Zt.log(`${(_a4 = Zt.tags[g]) != null ? _a4 : ""}`, h.message || h.query);
          });
        }
        this._metrics = new bt(this._engine);
      } catch (l) {
        throw l.clientVersion = this._clientVersion, l;
      }
      return this._appliedParent = dr(this);
    }
    get [Symbol.toStringTag]() {
      return "PrismaClient";
    }
    $use(n) {
      this._middlewares.use(n);
    }
    $on(n, i) {
      n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i);
    }
    $connect() {
      try {
        return this._engine.start();
      } catch (n) {
        throw n.clientVersion = this._clientVersion, n;
      }
    }
    async $disconnect() {
      try {
        await this._engine.stop();
      } catch (n) {
        throw n.clientVersion = this._clientVersion, n;
      } finally {
        Co();
      }
    }
    $executeRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: lo({ clientMethod: i, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
    }
    $executeRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          let [s, a] = Ul(n, i);
          return ao(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
        }
        throw new J("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
      });
    }
    $executeRawUnsafe(n, ...i) {
      return this._createPrismaPromise((o) => (ao(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
    }
    $runCommandRaw(n) {
      if (e10.activeProvider !== "mongodb") throw new J(`The ${e10.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
      return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: fl, callsite: Ze(this._errorFormat), transaction: i }));
    }
    async $queryRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: lo({ clientMethod: i, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
    }
    $queryRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...Ul(n, i));
        throw new J("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
      });
    }
    $queryRawTyped(n) {
      return this._createPrismaPromise((i) => {
        if (!this._hasPreviewFlag("typedSql")) throw new J("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
        return this.$queryRawInternal(i, "$queryRawTyped", n);
      });
    }
    $queryRawUnsafe(n, ...i) {
      return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
    }
    _transactionWithArray({ promises: n, options: i }) {
      let o = Om.nextId(), s = Sl(n.length), a = n.map((l, u) => {
        var _a3, _b2, _c3;
        if ((l == null ? void 0 : l[Symbol.toStringTag]) !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
        let c = (_a3 = i == null ? void 0 : i.isolationLevel) != null ? _a3 : this._engineConfig.transactionOptions.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
        return (_c3 = (_b2 = l.requestTransaction) == null ? void 0 : _b2.call(l, p)) != null ? _c3 : l;
      });
      return Bl(a);
    }
    async _transactionWithCallback({ callback: n, options: i }) {
      var _a3, _b2, _c3;
      let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: (_a3 = i == null ? void 0 : i.maxWait) != null ? _a3 : this._engineConfig.transactionOptions.maxWait, timeout: (_b2 = i == null ? void 0 : i.timeout) != null ? _b2 : this._engineConfig.transactionOptions.timeout, isolationLevel: (_c3 = i == null ? void 0 : i.isolationLevel) != null ? _c3 : this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), l;
      try {
        let u = { kind: "itx", ...a };
        l = await n(this._createItxClient(u)), await this._engine.transaction("commit", o, a);
      } catch (u) {
        throw await this._engine.transaction("rollback", o, a).catch(() => {
        }), u;
      }
      return l;
    }
    _createItxClient(n) {
      return dr(ve(sa(this), [re("_appliedParent", () => this._appliedParent._createItxClient(n)), re("_createPrismaPromise", () => uo(n)), re(Im, () => n.id), Et(wl)]));
    }
    $transaction(n, i) {
      var _a3;
      let o;
      typeof n == "function" ? ((_a3 = this._engineConfig.adapter) == null ? void 0 : _a3.adapterName) === "@prisma/adapter-d1" ? o = () => {
        throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
      } : o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
      let s = { name: "transaction", attributes: { method: "$transaction" } };
      return this._tracingHelper.runInChildSpan(s, o);
    }
    _request(n) {
      var _a3;
      n.otelParentCtx = this._tracingHelper.getActiveContext();
      let i = (_a3 = n.middlewareArgsMapper) != null ? _a3 : Am, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = async (u) => {
        let c = this._middlewares.get(++a);
        if (c) return this._tracingHelper.runInChildSpan(s.middleware, (O) => c(u, (T) => (O == null ? void 0 : O.end(), l(T))));
        let { runInTransaction: p, args: d, ...f } = u, g = { ...n, ...f };
        d && (g.args = i.middlewareArgsToRequestArgs(d)), n.transaction !== void 0 && p === false && delete g.transaction;
        let h = await fa(this, g);
        return g.model ? ca({ result: h, modelName: g.model, args: g.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : h;
      };
      return this._tracingHelper.runInChildSpan(s.operation, () => new Ql.AsyncResource("prisma-client-request").runInAsyncScope(() => l(o)));
    }
    async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: d, customDataProxyFetch: f }) {
      try {
        n = u ? u(n) : n;
        let g = { name: "serialize" }, h = this._tracingHelper.runInChildSpan(g, () => pl({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
        return L.enabled("prisma:client") && (tt("Prisma Client call:"), tt(`prisma.${i}(${Bs(n)})`), tt("Generated request:"), tt(JSON.stringify(h, null, 2) + `
`)), (c == null ? void 0 : c.kind) === "batch" && await c.lock, this._requestHandler.request({ protocolQuery: h, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: d, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: f });
      } catch (g) {
        throw g.clientVersion = this._clientVersion, g;
      }
    }
    get $metrics() {
      if (!this._hasPreviewFlag("metrics")) throw new J("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
      return this._metrics;
    }
    _hasPreviewFlag(n) {
      var _a3;
      return !!((_a3 = this._engineConfig.previewFeatures) == null ? void 0 : _a3.includes(n));
    }
    $applyPendingMigrations() {
      return this._engine.applyPendingMigrations();
    }
  }
  return t;
}
function Ul(e10, t) {
  return km(e10) ? [new ie(e10, t), Pl] : [e10, vl];
}
function km(e10) {
  return Array.isArray(e10) && Array.isArray(e10.raw);
}
var Dm = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
function Kl(e10) {
  return new Proxy(e10, { get(t, r) {
    if (r in t) return t[r];
    if (!Dm.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
  } });
}
function zl(e10) {
  Ht(e10, { conflictCheck: "warn" });
}

(function (exports) {
	var _a;
	Object.defineProperty(exports, "__esModule", { value: true });
	const {
	  PrismaClientKnownRequestError,
	  PrismaClientUnknownRequestError,
	  PrismaClientRustPanicError,
	  PrismaClientInitializationError,
	  PrismaClientValidationError,
	  NotFoundError,
	  getPrismaClient,
	  sqltag,
	  empty,
	  join,
	  raw,
	  skip,
	  Decimal,
	  Debug,
	  objectEnumValues,
	  makeStrictEnum,
	  Extensions,
	  warnOnce,
	  defineDmmfProperty,
	  Public,
	  getRuntime
	} = library;
	const Prisma = {};
	exports.Prisma = Prisma;
	exports.$Enums = {};
	Prisma.prismaVersion = {
	  client: "5.20.0",
	  engine: "06fc58a368dc7be9fbbbe894adf8d445d208c284"
	};
	Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
	Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
	Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
	Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
	Prisma.PrismaClientValidationError = PrismaClientValidationError;
	Prisma.NotFoundError = NotFoundError;
	Prisma.Decimal = Decimal;
	Prisma.sql = sqltag;
	Prisma.empty = empty;
	Prisma.join = join;
	Prisma.raw = raw;
	Prisma.validator = Public.validator;
	Prisma.getExtensionContext = Extensions.getExtensionContext;
	Prisma.defineExtension = Extensions.defineExtension;
	Prisma.DbNull = objectEnumValues.instances.DbNull;
	Prisma.JsonNull = objectEnumValues.instances.JsonNull;
	Prisma.AnyNull = objectEnumValues.instances.AnyNull;
	Prisma.NullTypes = {
	  DbNull: objectEnumValues.classes.DbNull,
	  JsonNull: objectEnumValues.classes.JsonNull,
	  AnyNull: objectEnumValues.classes.AnyNull
	};
	const path = require$$1;
	exports.Prisma.UserScalarFieldEnum = {
	  id: "id",
	  email: "email",
	  name: "name",
	  avatarUrl: "avatarUrl",
	  hashedPassword: "hashedPassword",
	  createdAt: "createdAt",
	  updatedAt: "updatedAt"
	};
	exports.Prisma.OauthAccountScalarFieldEnum = {
	  id: "id",
	  providerId: "providerId",
	  providerUserId: "providerUserId",
	  userId: "userId",
	  createdAt: "createdAt",
	  updatedAt: "updatedAt"
	};
	exports.Prisma.ProcessingHistoryScalarFieldEnum = {
	  id: "id",
	  totalCount: "totalCount",
	  totalValue: "totalValue",
	  labeledImage: "labeledImage",
	  createdAt: "createdAt",
	  userId: "userId"
	};
	exports.Prisma.HistoryCoinDetailScalarFieldEnum = {
	  id: "id",
	  type: "type",
	  count: "count",
	  value: "value",
	  historyId: "historyId"
	};
	exports.Prisma.SortOrder = {
	  asc: "asc",
	  desc: "desc"
	};
	exports.Prisma.QueryMode = {
	  default: "default",
	  insensitive: "insensitive"
	};
	exports.Prisma.ModelName = {
	  User: "User",
	  OauthAccount: "OauthAccount",
	  ProcessingHistory: "ProcessingHistory",
	  HistoryCoinDetail: "HistoryCoinDetail"
	};
	const config = {
	  "generator": {
	    "name": "client",
	    "provider": {
	      "fromEnvVar": null,
	      "value": "prisma-client-js"
	    },
	    "output": {
	      "value": "C:\\Users\\66979\\Downloads\\coin2\\ProjectCoin\\starter\\src\\generated\\prisma",
	      "fromEnvVar": null
	    },
	    "config": {
	      "engineType": "library"
	    },
	    "binaryTargets": [
	      {
	        "fromEnvVar": null,
	        "value": "windows",
	        "native": true
	      }
	    ],
	    "previewFeatures": [],
	    "sourceFilePath": "C:\\Users\\66979\\Downloads\\coin2\\ProjectCoin\\starter\\prisma\\schema.prisma",
	    "isCustomOutput": true
	  },
	  "relativeEnvPaths": {
	    "rootEnvPath": null,
	    "schemaEnvPath": "../../../.env"
	  },
	  "relativePath": "../../../prisma",
	  "clientVersion": "5.20.0",
	  "engineVersion": "06fc58a368dc7be9fbbbe894adf8d445d208c284",
	  "datasourceNames": [
	    "db"
	  ],
	  "activeProvider": "mongodb",
	  "postinstall": false,
	  "inlineDatasources": {
	    "db": {
	      "url": {
	        "fromEnvVar": "DATABASE_URL",
	        "value": null
	      }
	    }
	  },
	  "inlineSchema": '// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = "prisma-client-js"\n  output   = "../src/generated/prisma" // \u0E2B\u0E23\u0E37\u0E2D path \u0E2D\u0E37\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21\n}\n\ndatasource db {\n  provider = "mongodb"\n  url      = env("DATABASE_URL")\n}\n\nmodel User {\n  id             String  @id @default(auto()) @map("_id") @db.ObjectId\n  email          String  @unique\n  name           String?\n  avatarUrl      String?\n  hashedPassword String?\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  //Relations\n  oauthAccounts       OauthAccount[]\n  processingHistories ProcessingHistory[]\n}\n\nmodel OauthAccount {\n  id             String   @id @default(auto()) @map("_id") @db.ObjectId\n  providerId     String\n  providerUserId String\n  userId         String   @db.ObjectId\n  createdAt      DateTime @default(now())\n  updatedAt      DateTime @updatedAt\n\n  //Relations\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  //Unique constraint\n  @@unique([providerId, providerUserId])\n}\n\nmodel ProcessingHistory {\n  id           String   @id @default(auto()) @map("_id") @db.ObjectId\n  totalCount   Int\n  totalValue   Float\n  labeledImage String\n  createdAt    DateTime @default(now())\n\n  userId String @db.ObjectId\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  details HistoryCoinDetail[]\n}\n\nmodel HistoryCoinDetail {\n  id    String @id @default(auto()) @map("_id") @db.ObjectId\n  type  String\n  count Int\n  value Float\n\n  historyId String            @db.ObjectId\n  history   ProcessingHistory @relation(fields: [historyId], references: [id], onDelete: Cascade)\n}\n',
	  "inlineSchemaHash": "028e0ef6c46bf5ab2cc946c8b30ef9081c536ad92c81869272dfce4c0303b027",
	  "copyEngine": true
	};
	const fs = require$$2;
	config.dirname = __dirname;
	if (!fs.existsSync(path.join(__dirname, "schema.prisma"))) {
	  const alternativePaths = [
	    "src/generated/prisma",
	    "generated/prisma"
	  ];
	  const alternativePath = (_a = alternativePaths.find((altPath) => {
	    return fs.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
	  })) != null ? _a : alternativePaths[0];
	  config.dirname = path.join(process.cwd(), alternativePath);
	  config.isBundled = true;
	}
	config.runtimeDataModel = JSON.parse('{"models":{"User":{"dbName":null,"fields":[{"name":"id","dbName":"_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"auto","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"avatarUrl","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"hashedPassword","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"oauthAccounts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"OauthAccount","relationName":"OauthAccountToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"processingHistories","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ProcessingHistory","relationName":"ProcessingHistoryToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"OauthAccount":{"dbName":null,"fields":[{"name":"id","dbName":"_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"auto","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"providerId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"providerUserId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"OauthAccountToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["providerId","providerUserId"]],"uniqueIndexes":[{"name":null,"fields":["providerId","providerUserId"]}],"isGenerated":false},"ProcessingHistory":{"dbName":null,"fields":[{"name":"id","dbName":"_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"auto","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"totalCount","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"totalValue","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"labeledImage","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"ProcessingHistoryToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"details","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"HistoryCoinDetail","relationName":"HistoryCoinDetailToProcessingHistory","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"HistoryCoinDetail":{"dbName":null,"fields":[{"name":"id","dbName":"_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"auto","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"type","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"count","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"value","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"historyId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"history","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ProcessingHistory","relationName":"HistoryCoinDetailToProcessingHistory","relationFromFields":["historyId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
	defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
	config.engineWasm = void 0;
	const { warnEnvConflicts } = library;
	warnEnvConflicts({
	  rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
	  schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
	});
	const PrismaClient = getPrismaClient(config);
	exports.PrismaClient = PrismaClient;
	Object.assign(exports, Prisma);
	path.join(__dirname, "query_engine-windows.dll.node");
	path.join(process.cwd(), "src/generated/prisma/query_engine-windows.dll.node");
	path.join(__dirname, "schema.prisma");
	path.join(process.cwd(), "src/generated/prisma/schema.prisma"); 
} (prisma));

const db = globalThis.prisma || new prisma.PrismaClient();

export { db as d };
//# sourceMappingURL=db.mjs.map
