import { defineComponent, ref, unref, mergeProps, useAttrs, computed, createElementBlock, openBlock, normalizeProps, guardReactiveProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { p as pollForProcessingImage } from './index-7Bv37o6Z.mjs';
import { u as useCldImageUrl } from './useCldImageUrl-B_WU-GYP.mjs';
import './server.mjs';
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

const domains = {
  "images.ctfassets.net": "contentful",
  "cdn.builder.io": "builder.io",
  "images.prismic.io": "imgix",
  "www.datocms-assets.com": "imgix",
  "cdn.sanity.io": "imgix",
  "images.unsplash.com": "imgix",
  "cdn.shopify.com": "shopify",
  "s7d1.scene7.com": "scene7",
  "ip.keycdn.com": "keycdn",
  "assets.caisy.io": "bunny",
  "images.contentstack.io": "contentstack",
  "ucarecdn.com": "uploadcare",
  "imagedelivery.net": "cloudflare_images"
};
const subdomains = {
  "imgix.net": "imgix",
  "files.wordpress.com": "wordpress",
  "b-cdn.net": "bunny",
  "storyblok.com": "storyblok",
  "kc-usercontent.com": "kontent.ai",
  "cloudinary.com": "cloudinary",
  "kxcdn.com": "keycdn",
  "imgeng.in": "imageengine",
  "imagekit.io": "imagekit",
  "cloudimg.io": "cloudimage",
  "ucarecdn.com": "uploadcare",
  "supabase.co": "supabase",
  "graphassets.com": "hygraph"
};
const paths = {
  "/cdn-cgi/image/": "cloudflare",
  "/cdn-cgi/imagedelivery/": "cloudflare_images",
  "/_next/image": "nextjs",
  "/_next/static": "nextjs",
  "/_vercel/image": "vercel",
  "/is/image": "scene7",
  "/_ipx/": "ipx",
  "/_image": "astro",
  "/.netlify/images": "netlify",
  "/storage/v1/object/public/": "supabase",
  "/storage/v1/render/image/public/": "supabase"
};
const roundIfNumeric = (value) => {
  if (!value) {
    return value;
  }
  const num = Number(value);
  return isNaN(num) ? value : Math.round(num);
};
const setParamIfDefined = (url, key, value, deleteExisting, roundValue) => {
  if (value) {
    if (roundValue) {
      value = roundIfNumeric(value);
    }
    url.searchParams.set(key, value.toString());
  } else if (deleteExisting) {
    url.searchParams.delete(key);
  }
};
const setParamIfUndefined = (url, key, value) => {
  if (!url.searchParams.has(key)) {
    url.searchParams.set(key, value.toString());
  }
};
const getNumericParam = (url, key) => {
  const value = Number(url.searchParams.get(key));
  return isNaN(value) ? void 0 : value;
};
const toRelativeUrl = (url) => {
  const { pathname, search } = url;
  return `${pathname}${search}`;
};
const toCanonicalUrlString = (url) => {
  return url.hostname === "n" ? toRelativeUrl(url) : url.toString();
};
const toUrl = (url, base) => {
  return typeof url === "string" ? new URL(url, base != null ? base : "http://n/") : url;
};
const cdnDomains = new Map(Object.entries(domains));
const cdnSubdomains = Object.entries(subdomains);
function getImageCdnForUrl(url) {
  return getImageCdnForUrlByDomain(url) || getImageCdnForUrlByPath(url);
}
function getImageCdnForUrlByDomain(url) {
  if (typeof url === "string" && !url.startsWith("https://")) {
    return false;
  }
  const { hostname } = toUrl(url);
  if (cdnDomains.has(hostname)) {
    return cdnDomains.get(hostname);
  }
  for (const [subdomain, cdn] of cdnSubdomains) {
    if (hostname.endsWith(`.${subdomain}`)) {
      return cdn;
    }
  }
  return false;
}
function getImageCdnForUrlByPath(url) {
  const { pathname } = toUrl(url);
  for (const [prefix, cdn] of Object.entries(paths)) {
    if (pathname.startsWith(prefix)) {
      return cdn;
    }
  }
  return false;
}
const transform$p = ({ url: originalUrl, width, height, format }) => {
  const url = toUrl(originalUrl);
  if (width && width > 4e3) {
    if (height) {
      height = Math.round(height * 4e3 / width);
    }
    width = 4e3;
  }
  if (height && height > 4e3) {
    if (width) {
      width = Math.round(width * 4e3 / height);
    }
    height = 4e3;
  }
  setParamIfDefined(url, "w", width, true, true);
  setParamIfDefined(url, "h", height, true, true);
  setParamIfDefined(url, "fm", format);
  setParamIfUndefined(url, "fit", "fill");
  return url;
};
const transform$o = ({ url: originalUrl, width, height, format }) => {
  const url = toUrl(originalUrl);
  setParamIfDefined(url, "width", width, true, true);
  setParamIfDefined(url, "height", height, true, true);
  setParamIfDefined(url, "format", format);
  if (width && height) {
    setParamIfUndefined(url, "fit", "cover");
    setParamIfUndefined(url, "sharp", "true");
  }
  return url;
};
const transform$n = ({ url: originalUrl, width, height, format }) => {
  var _a;
  const url = toUrl(originalUrl);
  setParamIfDefined(url, "w", width, true, true);
  setParamIfDefined(url, "h", height, true, true);
  setParamIfUndefined(url, "fit", "min");
  if (format) {
    url.searchParams.set("fm", format);
    const fm = url.searchParams.get("auto");
    if (fm === "format") {
      url.searchParams.delete("auto");
    } else if (fm == null ? void 0 : fm.includes("format")) {
      url.searchParams.set("auto", fm.split(",").filter((s) => s !== "format").join(","));
    }
  } else {
    url.searchParams.delete("fm");
    if (!((_a = url.searchParams.get("auto")) == null ? void 0 : _a.includes("format"))) {
      url.searchParams.append("auto", "format");
    }
  }
  return url;
};
const shopifyRegex = /(.+?)(?:_(?:(pico|icon|thumb|small|compact|medium|large|grande|original|master)|(\d*)x(\d*)))?(?:_crop_([a-z]+))?(\.[a-zA-Z]+)(\.png|\.jpg|\.webp|\.avif)?$/;
const parse$9 = (imageUrl) => {
  const url = toUrl(imageUrl);
  const match = url.pathname.match(shopifyRegex);
  if (!match) {
    throw new Error("Invalid Shopify URL");
  }
  const [, path, size, width, height, crop, extension, format] = match;
  url.pathname = `${path}${extension}`;
  const widthString = width ? width : url.searchParams.get("width");
  const heightString = height ? height : url.searchParams.get("height");
  url.searchParams.delete("width");
  url.searchParams.delete("height");
  return {
    base: url.toString(),
    width: Number(widthString) || void 0,
    height: Number(heightString) || void 0,
    format: format ? format.slice(1) : void 0,
    params: { crop, size },
    cdn: "shopify"
  };
};
const generate$a = ({ base, width, height, format, params }) => {
  const url = toUrl(base);
  setParamIfDefined(url, "width", width, true, true);
  setParamIfDefined(url, "height", height, true, true);
  setParamIfDefined(url, "crop", params == null ? void 0 : params.crop);
  setParamIfDefined(url, "format", format);
  return url;
};
const transform$m = ({ url: originalUrl, width, height }) => {
  const parsed = parse$9(originalUrl);
  if (!parsed) {
    return;
  }
  const props = {
    ...parsed,
    width,
    height
  };
  return generate$a(props);
};
const transform$l = ({ url: originalUrl, width, height }) => {
  const url = toUrl(originalUrl);
  setParamIfDefined(url, "w", width, true, true);
  setParamIfDefined(url, "h", height, true, true);
  setParamIfUndefined(url, "crop", "1");
  return url;
};
const transform$k = ({ url: originalUrl, width, height }) => {
  const url = toUrl(originalUrl);
  setParamIfDefined(url, "w", width, true, true);
  setParamIfDefined(url, "h", height, true, true);
  setParamIfDefined(url, "q", getNumericParam(url, "q"), true);
  return url;
};
const cloudinaryRegex = /https?:\/\/(?<host>[^\/]+)\/(?<cloudName>[^\/]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<idAndFormat>[^\s]+)$/g;
const parseTransforms$2 = (transformations) => {
  return transformations ? Object.fromEntries(transformations.split(",").map((t) => t.split("_"))) : {};
};
const formatUrl$3 = ({ host, cloudName, assetType, deliveryType, signature, transformations = {}, version, id, format }) => {
  if (format) {
    transformations.f = format;
  }
  const transformString = Object.entries(transformations).map(([key, value]) => `${key}_${value}`).join(",");
  const pathSegments = [
    host,
    cloudName,
    assetType,
    deliveryType,
    signature,
    transformString,
    version,
    id
  ].filter(Boolean).join("/");
  return `https://${pathSegments}`;
};
const parse$8 = (imageUrl) => {
  const url = toUrl(imageUrl);
  const matches = [...url.toString().matchAll(cloudinaryRegex)];
  if (!matches.length) {
    throw new Error("Invalid Cloudinary URL");
  }
  const group = matches[0].groups || {};
  const { transformations: transformString = "", idAndFormat, ...baseParams } = group;
  delete group.idAndFormat;
  const lastDotIndex = idAndFormat.lastIndexOf(".");
  const id = lastDotIndex < 0 ? idAndFormat : idAndFormat.slice(0, lastDotIndex);
  const originalFormat = lastDotIndex < 0 ? void 0 : idAndFormat.slice(lastDotIndex + 1);
  const { w, h: h2, f, ...transformations } = parseTransforms$2(transformString);
  const format = f && f !== "auto" ? f : originalFormat;
  const base = formatUrl$3({ ...baseParams, id, transformations });
  return {
    base,
    width: Number(w) || void 0,
    height: Number(h2) || void 0,
    format,
    cdn: "cloudinary",
    params: {
      ...group,
      id: group.deliveryType === "fetch" ? idAndFormat : id,
      format,
      transformations
    }
  };
};
const generate$9 = ({ base, width, height, format, params }) => {
  var _a;
  const parsed = parse$8(base.toString());
  const props = {
    transformations: {},
    ...parsed.params,
    ...params,
    format: format || "auto"
  };
  if (width) {
    props.transformations.w = roundIfNumeric(width).toString();
  }
  if (height) {
    props.transformations.h = roundIfNumeric(height).toString();
  }
  (_a = props.transformations).c || (_a.c = "lfill");
  return formatUrl$3(props);
};
const transform$j = ({ url: originalUrl, width, height, format = "auto" }) => {
  var _a, _b;
  const parsed = parse$8(originalUrl);
  if (!parsed) {
    throw new Error("Invalid Cloudinary URL");
  }
  if (((_a = parsed.params) == null ? void 0 : _a.assetType) !== "image") {
    throw new Error("Cloudinary transformer only supports images");
  }
  if ((_b = parsed.params) == null ? void 0 : _b.signature) {
    throw new Error("Cloudinary transformer does not support signed URLs");
  }
  const props = {
    ...parsed,
    width,
    height,
    format
  };
  return generate$9(props);
};
const cloudflareRegex = /https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/image\/(?<transformations>[^\/]+)?\/(?<path>.*)$/g;
const parseTransforms$1 = (transformations) => Object.fromEntries(transformations.split(",").map((t) => t.split("=")));
const formatUrl$2 = ({ host, transformations = {}, path }) => {
  const transformString = Object.entries(transformations).map(([key, value]) => `${key}=${value}`).join(",");
  const pathSegments = [
    host,
    "cdn-cgi",
    "image",
    transformString,
    path
  ].join("/");
  return `https://${pathSegments}`;
};
const parse$7 = (imageUrl) => {
  const url = toUrl(imageUrl);
  const matches = [...url.toString().matchAll(cloudflareRegex)];
  if (!matches.length) {
    throw new Error("Invalid Cloudflare URL");
  }
  const group = matches[0].groups || {};
  const { transformations: transformString, ...baseParams } = group;
  const { width, height, f, ...transformations } = parseTransforms$1(transformString);
  formatUrl$2({ ...baseParams, transformations });
  return {
    base: url.toString(),
    width: Number(width) || void 0,
    height: Number(height) || void 0,
    format: f,
    cdn: "cloudflare",
    params: { ...group, transformations }
  };
};
const generate$8 = ({ base, width, height, format, params }) => {
  var _a;
  const parsed = parse$7(base.toString());
  const props = {
    transformations: {},
    ...parsed.params,
    ...params
  };
  if (width) {
    props.transformations.width = width == null ? void 0 : width.toString();
  }
  if (height) {
    props.transformations.height = height == null ? void 0 : height.toString();
  }
  if (format) {
    props.transformations.f = format === "jpg" ? "jpeg" : format;
  }
  (_a = props.transformations).fit || (_a.fit = "cover");
  return new URL(formatUrl$2(props));
};
const transform$i = ({ url: originalUrl, width, height, format = "auto" }) => {
  const parsed = parse$7(originalUrl);
  if (!parsed) {
    throw new Error("Invalid Cloudflare URL");
  }
  const props = {
    ...parsed,
    width,
    height,
    format
  };
  return generate$8(props);
};
const transform$h = ({ url: originalUrl, width, height }) => {
  const url = toUrl(originalUrl);
  setParamIfDefined(url, "width", width, true, true);
  if (width && height) {
    setParamIfUndefined(url, "aspect_ratio", `${width}:${height}`);
  }
  return url;
};
const storyBlokAssets = /(?<id>\/f\/\d+\/\d+x\d+\/\w+\/[^\/]+)\/?(?<modifiers>m\/?(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?)?$/g;
const storyBlokImg2 = /^(?<modifiers>\/(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?\/?)?(?<id>\/f\/.+)$/g;
const splitFilters = (filters) => {
  if (!filters) {
    return {};
  }
  return Object.fromEntries(filters.split(":").map((filter) => {
    if (!filter)
      return [];
    const [key, value] = filter.split("(");
    return [key, value.replace(")", "")];
  }));
};
const generateFilters = (filters) => {
  if (!filters) {
    return void 0;
  }
  const filterItems = Object.entries(filters).map(([key, value]) => `${key}(${value != null ? value : ""})`);
  if (filterItems.length === 0) {
    return void 0;
  }
  return `filters:${filterItems.join(":")}`;
};
const parse$6 = (imageUrl) => {
  const url = toUrl(imageUrl);
  const regex = url.hostname === "img2.storyblok.com" ? storyBlokImg2 : storyBlokAssets;
  const [matches] = url.pathname.matchAll(regex);
  if (!matches || !matches.groups) {
    throw new Error("Invalid Storyblok URL");
  }
  const { id, crop, width, height, filters, flipx, flipy } = matches.groups;
  const { format, ...filterMap } = splitFilters(filters);
  if (url.hostname === "img2.storyblok.com") {
    url.hostname = "a.storyblok.com";
  }
  return {
    base: url.origin + id,
    width: Number(width) || void 0,
    height: Number(height) || void 0,
    format,
    params: {
      crop,
      filters: filterMap,
      flipx,
      flipy
    },
    cdn: "storyblok"
  };
};
const generate$7 = ({ base, width = 0, height = 0, format, params = {} }) => {
  const { crop, filters, flipx = "", flipy = "" } = params;
  const size = `${flipx}${width}x${flipy}${height}`;
  return new URL([base, "m", crop, size, generateFilters(filters), format].filter(Boolean).join("/"));
};
const transform$g = ({ url: originalUrl, width, height, format }) => {
  const parsed = parse$6(originalUrl);
  if (!parsed) {
    return;
  }
  if (format) {
    if (!parsed.params) {
      parsed.params = { filters: {} };
    }
    if (!parsed.params.filters) {
      parsed.params.filters = {};
    }
    parsed.params.filters.format = format;
  }
  return generate$7({
    ...parsed,
    width,
    height
  });
};
const transform$f = ({ url: originalUrl, width, height, format }) => {
  const url = toUrl(originalUrl);
  setParamIfDefined(url, "w", width, true, true);
  setParamIfDefined(url, "h", height, true, true);
  setParamIfDefined(url, "fm", format, true);
  if (width && height) {
    setParamIfUndefined(url, "fit", "crop");
  }
  return url;
};
const delegateUrl = (url) => {
  const parsed = toUrl(url);
  const source = parsed.searchParams.get("url");
  if (!source || !source.startsWith("http")) {
    return false;
  }
  const cdn = getImageCdnForUrlByDomain(source);
  if (!cdn) {
    return false;
  }
  return {
    cdn,
    url: source
  };
};
const generate$6 = ({ base, width, params: { quality = 75, root = "_vercel" } = {} }) => {
  const url = new URL("http://n");
  url.pathname = `/${root}/image`;
  url.searchParams.set("url", base.toString());
  setParamIfDefined(url, "w", width, false, true);
  setParamIfUndefined(url, "q", quality);
  return toRelativeUrl(url);
};
const transform$e = ({ url, width, cdn }) => {
  const parsedUrl = toUrl(url);
  const isNextImage = parsedUrl.pathname.startsWith("/_next/image") || parsedUrl.pathname.startsWith("/_vercel/image");
  const src = isNextImage ? parsedUrl.searchParams.get("url") : url.toString();
  if (!src) {
    return void 0;
  }
  setParamIfDefined(parsedUrl, "w", width, true, true);
  if (isNextImage) {
    return toCanonicalUrlString(parsedUrl);
  }
  return generate$6({
    base: src,
    width,
    params: { root: cdn === "nextjs" ? "_next" : "_vercel" }
  });
};
const transform$d = (params) => transform$e({ ...params, cdn: "nextjs" });
const transform$c = ({ url: originalUrl, width, height, format }) => {
  const url = toUrl(originalUrl);
  setParamIfDefined(url, "wid", width, true, true);
  setParamIfDefined(url, "hei", height, true, true);
  setParamIfDefined(url, "fmt", format, true);
  setParamIfDefined(url, "qlt", getNumericParam(url, "qlt"), true);
  setParamIfDefined(url, "scl", getNumericParam(url, "scl"), true);
  setParamIfUndefined(url, "fit", "crop");
  if (!width && !height) {
    setParamIfUndefined(url, "scl", 1);
  }
  return url;
};
const transform$b = ({ url: originalUrl, width, height, format }) => {
  const url = toUrl(originalUrl);
  setParamIfDefined(url, "width", width, true, true);
  setParamIfDefined(url, "height", height, true, true);
  setParamIfDefined(url, "format", format, true);
  setParamIfDefined(url, "quality", getNumericParam(url, "quality"), true);
  setParamIfUndefined(url, "enlarge", 0);
  return url;
};
const transform$a = ({ url: originalUrl, width, height, format }) => {
  const url = toUrl(originalUrl);
  setParamIfDefined(url, "width", width, true, true);
  setParamIfDefined(url, "height", height, true, true);
  setParamIfDefined(url, "format", format);
  setParamIfDefined(url, "quality", getNumericParam(url, "quality"), true);
  return url;
};
const OBJECT_TO_DIRECTIVES_MAP = {
  width: "w",
  height: "h",
  autoWidthWithFallback: "w_auto",
  auto_width_fallback: "w_auto",
  scaleToScreenWidth: "pc",
  scale_to_screen_width: "pc",
  crop: "cr",
  outputFormat: "f",
  format: "f",
  fit: "m",
  fitMethod: "m",
  compression: "cmpr",
  sharpness: "s",
  rotate: "r",
  inline: "in",
  keepMeta: "meta",
  keep_meta: "meta",
  noOptimization: "pass",
  no_optimization: "pass",
  force_download: "dl",
  max_device_pixel_ratio: "maxdpr",
  maxDevicePixelRatio: "maxdpr"
};
function getDirective(key) {
  let keyArray = Object.keys(OBJECT_TO_DIRECTIVES_MAP);
  let directive = keyArray.find((k) => OBJECT_TO_DIRECTIVES_MAP[k] === key) || "";
  return directive;
}
function getParameterArray(url) {
  let url_string = url.toString();
  let paramArray = [];
  if (url_string) {
    let splitURL = url_string.split("imgeng=");
    if (splitURL.length > 1) {
      paramArray = splitURL[1].split("/");
    }
  }
  return paramArray;
}
function getBaseUrl(url) {
  let url_string = url.toString();
  let baseUrl = "";
  if (url_string) {
    let splitURL = url_string.split("imgeng=");
    if (splitURL.length > 1) {
      baseUrl = splitURL[0].slice(0, -1);
    } else {
      baseUrl = url_string;
    }
  }
  return baseUrl;
}
const transform$9 = ({ url: originalUrl, width, height, format }) => {
  const url = toUrl(originalUrl);
  const src = getBaseUrl(url);
  let directives = {};
  const param = url.toString() === src ? [] : getParameterArray(url);
  if (param.length) {
    directives = getDirectives(param);
  }
  if (width) {
    directives["width"] = width;
  }
  if (height) {
    directives["height"] = height;
  }
  if (format) {
    directives["format"] = format;
  }
  if (!directives.hasOwnProperty("fit")) {
    directives = { ...directives, "fit": "cropbox" };
  }
  let directives_string = build_IE_directives(directives);
  let query_string = build_IE_query_string(directives_string);
  let query_prefix = query_string === "" ? "" : src.includes("?") ? "&" : "?";
  return `${src}${query_prefix}${query_string}`;
};
function build_IE_directives(directives) {
  return Object.entries(directives).reduce((acc, [k, v]) => {
    return acc + maybe_create_directive(k, v);
  }, "");
}
function build_IE_query_string(directives_string) {
  if (directives_string && directives_string !== "") {
    return `imgeng=${directives_string}`;
  }
  return "";
}
function maybe_create_directive(directive, value) {
  let translated_directive = OBJECT_TO_DIRECTIVES_MAP[directive];
  if (translated_directive && (value || value === 0)) {
    return `/${translated_directive}_${value}`;
  }
  return "";
}
function getDirectives(paramArray) {
  let directives = {};
  paramArray.forEach((para) => {
    let keyValue = para.split("_");
    if (keyValue.length > 1) {
      let key = keyValue[0];
      let value = keyValue[1];
      let directiveKey = getDirective(key);
      if (directiveKey) {
        directives[directiveKey] = value;
      }
    }
  });
  return directives;
}
const transform$8 = ({ url: originalUrl, width, height, format }) => {
  const url = toUrl(originalUrl);
  setParamIfDefined(url, "width", width, true, true);
  setParamIfDefined(url, "height", height, true, true);
  setParamIfDefined(url, "format", format);
  if (!url.searchParams.has("format")) {
    setParamIfUndefined(url, "auto", "webp");
  }
  if (width && height) {
    setParamIfUndefined(url, "fit", "crop");
  }
  return url;
};
const cloudflareImagesRegex = /https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/imagedelivery\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g;
const imagedeliveryRegex = /https?:\/\/(?<host>imagedelivery.net)\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g;
const parseTransforms = (transformations) => {
  var _a2;
  var _a;
  return Object.fromEntries((_a2 = (_a = transformations == null ? void 0 : transformations.split(",")) == null ? void 0 : _a.map((t) => t.split("="))) != null ? _a2 : []);
};
const formatUrl$1 = ({ host, accountHash, transformations = {}, imageId }) => {
  const transformString = Object.entries(transformations).filter(([key, value]) => Boolean(key) && value !== void 0).map(([key, value]) => `${key}=${value}`).join(",");
  const pathSegments = [
    ...host === "imagedelivery.net" ? [host] : [host, "cdn-cgi", "imagedelivery"],
    accountHash,
    imageId,
    transformString
  ].join("/");
  return `https://${pathSegments}`;
};
const parse$5 = (imageUrl) => {
  const url = toUrl(imageUrl);
  const matches = [
    ...url.toString().matchAll(cloudflareImagesRegex),
    ...url.toString().matchAll(imagedeliveryRegex)
  ];
  if (!matches.length) {
    throw new Error("Invalid Cloudflare Images URL");
  }
  const group = matches[0].groups || {};
  const { transformations: transformString, ...baseParams } = group;
  const { w, h: h2, f, ...transformations } = parseTransforms(transformString);
  return {
    base: url.toString(),
    width: Number(w) || void 0,
    height: Number(h2) || void 0,
    format: f,
    cdn: "cloudflare_images",
    params: { ...baseParams, transformations }
  };
};
const generate$5 = ({ base, width, height, format, params }) => {
  var _a;
  const parsed = parse$5(base.toString());
  const props = {
    transformations: {},
    ...parsed.params,
    ...params
  };
  if (width) {
    props.transformations.w = width == null ? void 0 : width.toString();
  }
  if (height) {
    props.transformations.h = height == null ? void 0 : height.toString();
  }
  if (format) {
    props.transformations.f = format;
  }
  (_a = props.transformations).fit || (_a.fit = "cover");
  return new URL(formatUrl$1(props));
};
const transform$7 = ({ url: originalUrl, width, height, format = "auto" }) => {
  const parsed = parse$5(originalUrl);
  if (!parsed) {
    throw new Error("Invalid Cloudflare Images URL");
  }
  const props = {
    ...parsed,
    width,
    height,
    format
  };
  return generate$5(props);
};
const parse$4 = (imageUrl) => {
  const url = toUrl(imageUrl);
  const [modifiers, ...id] = url.pathname.split("/").slice(1);
  const params = Object.fromEntries(modifiers.split(",").map((modifier) => {
    const [key, value] = modifier.split("_");
    return [key, value];
  }));
  if (params.s) {
    const [width, height] = params.s.split("x");
    params.w || (params.w = width);
    params.h || (params.h = height);
  }
  return {
    base: id.join("/"),
    width: Number(params.w) || void 0,
    height: Number(params.h) || void 0,
    quality: Number(params.q) || void 0,
    format: params.f || "auto",
    params,
    cdn: "ipx"
  };
};
const generate$4 = ({ base: id, width, height, format, params }) => {
  var _a;
  const modifiers = (_a = params == null ? void 0 : params.modifiers) != null ? _a : {};
  if (width && height) {
    modifiers.s = `${width}x${height}`;
  } else if (width) {
    modifiers.w = `${width}`;
  } else if (height) {
    modifiers.h = `${height}`;
  }
  if (format) {
    modifiers.f = format;
  }
  const base = (params == null ? void 0 : params.base.endsWith("/")) ? params == null ? void 0 : params.base : `${params == null ? void 0 : params.base}/`;
  const modifiersString = Object.entries(modifiers).map(([key, value]) => `${key}_${value}`).join(",");
  const stringId = id.toString();
  const image = stringId.startsWith("/") ? stringId.slice(1) : stringId;
  return `${base}${modifiersString}/${image}`;
};
const transform$6 = (options) => {
  var _a2;
  var _a, _b, _c, _d;
  const url = String(options.url);
  const parsedUrl = toUrl(url);
  const defaultBase = parsedUrl.pathname.startsWith("/_ipx") && parsedUrl.hostname !== "n" ? `${parsedUrl.origin}/_ipx` : "/_ipx";
  const base = (_a2 = (_b = (_a = options.cdnOptions) == null ? void 0 : _a.ipx) == null ? void 0 : _b.base) != null ? _a2 : defaultBase;
  const isIpxUrl = base && base !== "/" && url.startsWith(base);
  if (isIpxUrl) {
    const parsed = parse$4(url.replace(base, ""));
    return generate$4({
      ...parsed,
      ...options,
      params: {
        ...(_c = options.cdnOptions) == null ? void 0 : _c.ipx,
        base
      }
    });
  }
  return generate$4({
    ...options,
    base: url,
    params: {
      ...(_d = options.cdnOptions) == null ? void 0 : _d.ipx,
      base
    }
  });
};
const transform$5 = ({ url: originalUrl, width, height, format, cdnOptions }) => {
  var _a2;
  var _a;
  const parsedUrl = toUrl(originalUrl);
  const href = toCanonicalUrlString(new URL(parsedUrl.pathname, parsedUrl.origin));
  const url = { searchParams: new URLSearchParams() };
  setParamIfDefined(url, "href", href, true, true);
  setParamIfDefined(url, "w", width, true, true);
  setParamIfDefined(url, "h", height, true, true);
  setParamIfDefined(url, "f", format);
  setParamIfUndefined(url, "fit", "cover");
  const endpoint = (_a2 = (_a = cdnOptions == null ? void 0 : cdnOptions.astro) == null ? void 0 : _a.endpoint) != null ? _a2 : "/_image";
  return `${endpoint}?${url.searchParams.toString()}`;
};
const skippedParams = /* @__PURE__ */ new Set([
  "w",
  "h",
  "q",
  "fm",
  "url",
  "width",
  "height",
  "quality"
]);
const parse$3 = (url) => {
  var _a, _b, _c, _d, _e;
  const parsed = toUrl(url);
  const width = (_b = Number((_a = parsed.searchParams.get("w")) != null ? _a : parsed.searchParams.get("width"))) != null ? _b : void 0;
  const height = (_d = Number((_c = parsed.searchParams.get("h")) != null ? _c : parsed.searchParams.get("height"))) != null ? _d : void 0;
  const quality = Number((_e = parsed.searchParams.get("q")) != null ? _e : parsed.searchParams.get("quality")) || void 0;
  const format = parsed.searchParams.get("fm") || void 0;
  const base = parsed.searchParams.get("url") || "";
  const params = {
    quality
  };
  parsed.searchParams.forEach((value, key) => {
    if (skippedParams.has(key)) {
      return;
    }
    params[key] = value;
  });
  parsed.search = "";
  return {
    base,
    width,
    height,
    format,
    params,
    cdn: "netlify"
  };
};
const generate$3 = ({ base, width, height, format, params: { site, quality, ...params } = {} }) => {
  const url = toUrl("/.netlify/images", site);
  Object.entries(params).forEach(([key, value]) => setParamIfDefined(url, key, value));
  setParamIfDefined(url, "q", quality, true, true);
  setParamIfDefined(url, "w", width, true, true);
  setParamIfDefined(url, "h", height, true, true);
  setParamIfDefined(url, "fm", format);
  setParamIfUndefined(url, "fit", "cover");
  url.searchParams.set("url", base.toString());
  return toCanonicalUrlString(url);
};
const transform$4 = (options) => {
  var _a, _b;
  const url = toUrl(options.url);
  if (url.pathname.startsWith("/.netlify/images")) {
    const { params, base, format } = parse$3(url);
    return generate$3({
      base,
      format,
      ...options,
      params: {
        ...params,
        // If hostname is "n", we're dealing with a relative URL, so we don't need to set the site param
        site: url.hostname === "n" ? void 0 : url.origin
      }
    });
  }
  return generate$3({
    ...options,
    base: options.url,
    params: {
      site: (_b = (_a = options.cdnOptions) == null ? void 0 : _a.netlify) == null ? void 0 : _b.site
    }
  });
};
const getTransformParams = (url) => {
  const transforms = url.searchParams.get("tr") || "";
  return transforms.split(",").reduce((acc, transform2) => {
    const [key, value] = transform2.split("-");
    acc[key] = value;
    return acc;
  }, {});
};
const transform$3 = ({ url: originalUrl, width, height, format }) => {
  const url = toUrl(originalUrl);
  const transformParams = getTransformParams(url);
  transformParams.w = width ? Math.round(width) : width;
  transformParams.h = height ? Math.round(height) : height;
  if (!transformParams.f) {
    transformParams.f = "auto";
  }
  if (format) {
    transformParams.f = format;
  }
  const tr = Object.keys(transformParams).map((key) => {
    const value = transformParams[key];
    if (value) {
      return `${key}-${value}`;
    }
  }).filter((x) => x).join(",");
  url.searchParams.set("tr", tr);
  return url;
};
const uploadcareRegex = /^https?:\/\/(?<host>[^\/]+)\/(?<uuid>[^\/]+)/g;
function extractFilename(cdnUrl) {
  const url = new URL(cdnUrl);
  const noOrigin = url.pathname + url.search + url.hash;
  const urlFilenameIdx = noOrigin.lastIndexOf("http");
  const plainFilenameIdx = noOrigin.lastIndexOf("/");
  let filename = "";
  if (urlFilenameIdx >= 0) {
    filename = noOrigin.slice(urlFilenameIdx);
  } else if (plainFilenameIdx >= 0) {
    filename = noOrigin.slice(plainFilenameIdx + 1);
  }
  return filename;
}
function isFileUrl(filename) {
  return filename.startsWith("http");
}
function splitFileUrl(fileUrl) {
  const url = new URL(fileUrl);
  return {
    pathname: url.origin + url.pathname || "",
    search: url.search || "",
    hash: url.hash || ""
  };
}
function trimFilename(cdnUrl) {
  const url = new URL(cdnUrl);
  const filename = extractFilename(cdnUrl);
  const filenamePathPart = isFileUrl(filename) ? splitFileUrl(filename).pathname : filename;
  url.pathname = url.pathname.replace(filenamePathPart, "");
  url.search = "";
  url.hash = "";
  return url.toString();
}
const normalizeCdnOperation = (operation) => {
  if (typeof operation !== "string" || !operation) {
    return "";
  }
  let str = operation.trim();
  if (str.startsWith("-/")) {
    str = str.slice(2);
  } else if (str.startsWith("/")) {
    str = str.slice(1);
  }
  if (str.endsWith("/")) {
    str = str.slice(0, str.length - 1);
  }
  return str;
};
function extractOperations(cdnUrl) {
  const withoutFilename = trimFilename(cdnUrl);
  const url = new URL(withoutFilename);
  const operationsMarker = url.pathname.indexOf("/-/");
  if (operationsMarker === -1) {
    return [];
  }
  const operationsStr = url.pathname.substring(operationsMarker);
  return operationsStr.split("/-/").filter(Boolean).map((operation) => normalizeCdnOperation(operation));
}
const parseOperations = (operations) => {
  return operations.length ? operations.reduce((acc, operation) => {
    const [key, value] = operation.split("/");
    return {
      ...acc,
      [key]: value
    };
  }, {}) : {};
};
const formatUrl = ({ host, uuid, operations = {}, filename }) => {
  const operationString = Object.entries(operations).map(([key, value]) => `${key}/${value}`).join("/-/");
  const pathSegments = [
    host,
    uuid,
    operationString ? `-/${operationString}` : "",
    filename
  ].join("/");
  return `https://${pathSegments}`;
};
const parse$2 = (imageUrl) => {
  const url = toUrl(imageUrl);
  const matchers = [...url.toString().matchAll(uploadcareRegex)];
  if (!matchers.length) {
    throw new Error("Invalid Uploadcare URL");
  }
  const group = matchers[0].groups || {};
  const { ...baseParams } = group;
  const filename = extractFilename(url.toString());
  const { format: f, ...operations } = parseOperations(extractOperations(url.toString()));
  const format = f && f !== "auto" ? f : "auto";
  const base = formatUrl({
    ...baseParams,
    filename: filename || void 0,
    operations: {
      ...operations,
      format
    }
  });
  return {
    base,
    cdn: "uploadcare",
    params: {
      ...group,
      filename: filename || void 0,
      operations: {
        ...operations,
        format
      }
    }
  };
};
const generate$2 = ({ base, width, height, params }) => {
  const baseUrl = base.toString();
  const parsed = parse$2(baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`);
  const props = {
    operations: {},
    ...parsed.params,
    ...params
  };
  if (width && height) {
    props.operations = {
      ...props.operations,
      resize: `${width}x${height}`
    };
  } else {
    if (width) {
      props.operations = {
        ...props.operations,
        resize: `${width}x`
      };
    }
    if (height) {
      props.operations = {
        ...props.operations,
        resize: `x${height}`
      };
    }
  }
  return formatUrl(props);
};
const transform$2 = ({ url: originalUrl, width, height }) => {
  const parsed = parse$2(originalUrl);
  if (!parsed) {
    throw new Error("Invalid Uploadcare URL");
  }
  const props = {
    ...parsed,
    width,
    height
  };
  return generate$2(props);
};
const ALLOWED_FORMATS = ["origin"];
const STORAGE_URL_PREFIX = "/storage/v1/object/public/";
const RENDER_URL_PREFIX = "/storage/v1/render/image/public/";
const isRenderUrl = (url) => url.pathname.startsWith(RENDER_URL_PREFIX);
const parse$1 = (imageUrl) => {
  const url = toUrl(imageUrl);
  const isRender = isRenderUrl(url);
  if (!isRender) {
    return {
      cdn: "supabase",
      base: url.origin + url.pathname
    };
  }
  const imagePath = url.pathname.replace(RENDER_URL_PREFIX, "");
  const quality = url.searchParams.has("quality") ? Number(url.searchParams.get("quality")) : void 0;
  const width = url.searchParams.has("width") ? Number(url.searchParams.get("width")) : void 0;
  const height = url.searchParams.has("height") ? Number(url.searchParams.get("height")) : void 0;
  const format = url.searchParams.has("format") ? url.searchParams.get("format") : void 0;
  const resize = url.searchParams.has("resize") ? url.searchParams.get("resize") : void 0;
  return {
    cdn: "supabase",
    base: url.origin + STORAGE_URL_PREFIX + imagePath,
    width,
    height,
    format,
    params: {
      quality,
      resize
    }
  };
};
const generate$1 = ({ base, width, height, format, params }) => {
  const parsed = parse$1(base.toString());
  base = parsed.base;
  width = width || parsed.width;
  height = height || parsed.height;
  format = format || parsed.format;
  params = { ...parsed.params, ...params };
  const searchParams = new URLSearchParams();
  if (width)
    searchParams.set("width", roundIfNumeric(width).toString());
  if (height)
    searchParams.set("height", roundIfNumeric(height).toString());
  if (format && ALLOWED_FORMATS.includes(format)) {
    searchParams.set("format", format);
  }
  if (params == null ? void 0 : params.quality) {
    searchParams.set("quality", roundIfNumeric(params.quality).toString());
  }
  if (params == null ? void 0 : params.resize)
    searchParams.set("resize", params.resize);
  if (searchParams.toString() === "")
    return base;
  return parsed.base.replace(STORAGE_URL_PREFIX, RENDER_URL_PREFIX) + "?" + searchParams.toString();
};
const transform$1 = ({ url, width, height, format, cdnOptions }) => {
  const parsed = parse$1(url);
  return generate$1({
    base: parsed.base,
    width: width || parsed.width,
    height: height || parsed.height,
    format: format || parsed.format,
    params: (cdnOptions == null ? void 0 : cdnOptions.supabase) || parsed.params
  });
};
const hygraphRegex = /https:\/\/(?<region>[a-z0-9-]+)\.graphassets\.com\/(?<envId>[a-z0-9]+)(?:\/(?<transformations>.*?))?\/(?<handle>[a-z0-9]+)$/;
const parse = (url) => {
  var _a, _b, _c, _d;
  const base = url.toString();
  const matches = base.match(hygraphRegex);
  if (!(matches == null ? void 0 : matches.length)) {
    throw new Error("Invalid Hygraph URL");
  }
  const group = matches.groups || {};
  const { transformations: unparsedTransformations, ...params } = group;
  const transformations = parseTransformations(unparsedTransformations || "");
  return {
    base,
    width: Number((_a = transformations.resize) == null ? void 0 : _a.width) || void 0,
    height: Number((_b = transformations.resize) == null ? void 0 : _b.height) || void 0,
    format: transformations.auto_image ? "auto" : ((_d = (_c = transformations.output) == null ? void 0 : _c.format) == null ? void 0 : _d.toString()) || void 0,
    params: { transformations, ...params },
    cdn: "hygraph"
  };
};
const generate = ({ base, width, height, format, params }) => {
  var _a, _b, _c;
  const parsed = parse(base.toString());
  const props = {
    transformations: {},
    ...parsed.params,
    ...params
  };
  if (width || height) {
    (_a = props.transformations).resize || (_a.resize = {});
  }
  if (width && height) {
    (_b = props.transformations.resize).fit || (_b.fit = "crop");
  }
  if (width) {
    props.transformations.resize.width = width;
  }
  if (height) {
    props.transformations.resize.height = height;
  }
  if (format === "auto") {
    props.transformations.auto_image = {};
  } else if (format) {
    (_c = props.transformations).output || (_c.output = {});
    props.transformations.output.format = format;
  }
  const url = new URL(base);
  url.pathname = `/${props.envId}/${formatTransformations(props.transformations)}/${props.handle}`;
  return url.toString();
};
const transform = ({ url: originalUrl, width, height, format = "auto" }) => {
  const parsed = parse(originalUrl);
  if (!parsed) {
    throw new Error("Invalid Hygraph URL");
  }
  const props = {
    ...parsed,
    width,
    height,
    format
  };
  return generate(props);
};
const parseTransformations = (transformations) => {
  if (!transformations) {
    return {};
  }
  return transformations.split("/").reduce((result, part) => {
    const [operation, params] = part.split("=");
    if (params) {
      result[operation] = params.split(",").reduce((obj, param) => {
        const [key, value] = param.split(":");
        obj[key] = isNaN(Number(value)) ? value : Number(value);
        return obj;
      }, {});
    } else {
      result[operation] = {};
    }
    return result;
  }, {});
};
const formatTransformations = (transformations) => {
  return Object.entries(transformations).filter(([key, value]) => Boolean(key) && value !== void 0).map(([key, value]) => Object.keys(value).length === 0 ? key : `${key}=${Object.entries(value).map(([key2, value2]) => `${key2}:${value2}`).join(",")}`).join("/");
};
const delegators = {
  vercel: delegateUrl,
  nextjs: delegateUrl
};
function getDelegatedCdn(url, cdn) {
  if (!(cdn in delegators)) {
    return false;
  }
  const maybeDelegate = delegators[cdn];
  if (!maybeDelegate) {
    return false;
  }
  return maybeDelegate(url);
}
function getCanonicalCdnForUrl(url, defaultCdn) {
  const cdn = getImageCdnForUrl(url) || defaultCdn;
  if (!cdn) {
    return false;
  }
  const maybeDelegated = getDelegatedCdn(url, cdn);
  if (maybeDelegated) {
    return maybeDelegated;
  }
  return { cdn, url };
}
const getTransformer = (cdn) => ({
  imgix: transform$n,
  contentful: transform$p,
  "builder.io": transform$o,
  shopify: transform$m,
  wordpress: transform$l,
  cloudimage: transform$k,
  cloudinary: transform$j,
  bunny: transform$h,
  storyblok: transform$g,
  cloudflare: transform$i,
  vercel: transform$e,
  nextjs: transform$d,
  scene7: transform$c,
  "kontent.ai": transform$f,
  keycdn: transform$b,
  directus: transform$a,
  imageengine: transform$9,
  contentstack: transform$8,
  "cloudflare_images": transform$7,
  ipx: transform$6,
  astro: transform$5,
  netlify: transform$4,
  imagekit: transform$3,
  uploadcare: transform$2,
  supabase: transform$1,
  hygraph: transform
})[cdn];
var getSizes = (width, layout) => {
  if (!width || !layout) {
    return void 0;
  }
  switch (layout) {
    case `constrained`:
      return `(min-width: ${width}px) ${width}px, 100vw`;
    case `fixed`:
      return `${width}px`;
    case `fullWidth`:
      return `100vw`;
    default:
      return void 0;
  }
};
var pixelate = (value) => value || value === 0 ? `${value}px` : void 0;
var getStyle = ({
  width,
  height,
  aspectRatio,
  layout,
  objectFit = "cover",
  background
}) => {
  const styleEntries = [
    ["object-fit", objectFit]
  ];
  if ((background == null ? void 0 : background.startsWith("https:")) || (background == null ? void 0 : background.startsWith("http:")) || (background == null ? void 0 : background.startsWith("data:"))) {
    styleEntries.push(["background-image", `url(${background})`]);
    styleEntries.push(["background-size", "cover"]);
    styleEntries.push(["background-repeat", "no-repeat"]);
  } else {
    styleEntries.push(["background", background]);
  }
  if (layout === "fixed") {
    styleEntries.push(["width", pixelate(width)]);
    styleEntries.push(["height", pixelate(height)]);
  }
  if (layout === "constrained") {
    styleEntries.push(["max-width", pixelate(width)]);
    styleEntries.push(["max-height", pixelate(height)]);
    styleEntries.push([
      "aspect-ratio",
      aspectRatio ? `${aspectRatio}` : void 0
    ]);
    styleEntries.push(["width", "100%"]);
  }
  if (layout === "fullWidth") {
    styleEntries.push(["width", "100%"]);
    styleEntries.push([
      "aspect-ratio",
      aspectRatio ? `${aspectRatio}` : void 0
    ]);
    styleEntries.push(["height", pixelate(height)]);
  }
  return Object.fromEntries(
    styleEntries.filter(([, value]) => value)
  );
};
var DEFAULT_RESOLUTIONS = [
  6016,
  // 6K
  5120,
  // 5K
  4480,
  // 4.5K
  3840,
  // 4K
  3200,
  // QHD+
  2560,
  // WQXGA
  2048,
  // QXGA
  1920,
  // 1080p
  1668,
  // Various iPads
  1280,
  // 720p
  1080,
  // iPhone 6-8 Plus
  960,
  // older horizontal phones
  828,
  // iPhone XR/11
  750,
  // iPhone 6-8
  640
  // older and lower-end phones
];
var LOW_RES_WIDTH = 24;
var getBreakpoints = ({
  width,
  layout,
  resolutions = DEFAULT_RESOLUTIONS
}) => {
  if (layout === "fullWidth") {
    return resolutions;
  }
  if (!width) {
    return [];
  }
  const doubleWidth = width * 2;
  if (layout === "fixed") {
    return [width, doubleWidth];
  }
  if (layout === "constrained") {
    return [
      // Always include the image at 1x and 2x the specified width
      width,
      doubleWidth,
      // Filter out any resolutions that are larger than the double-res image
      ...resolutions.filter((w) => w < doubleWidth)
    ];
  }
  return [];
};
var getSrcSetEntries = ({
  src,
  width,
  layout = "constrained",
  height,
  aspectRatio,
  breakpoints,
  cdn,
  transformer,
  format
}) => {
  const canonical = getCanonicalCdnForUrl(src, cdn);
  if (canonical && !transformer) {
    transformer = getTransformer(canonical.cdn);
  }
  if (!transformer) {
    return [];
  }
  breakpoints || (breakpoints = getBreakpoints({ width, layout }));
  return breakpoints.sort((a, b) => a - b).map((bp) => {
    let transformedHeight;
    if (height && aspectRatio) {
      transformedHeight = Math.round(bp / aspectRatio);
    }
    return {
      url: canonical ? canonical.url : src,
      width: bp,
      height: transformedHeight,
      format
    };
  });
};
var getSrcSet = (options) => {
  let { src, cdn, transformer } = options;
  const canonical = getCanonicalCdnForUrl(src, cdn);
  if (canonical && !transformer) {
    transformer = getTransformer(canonical.cdn);
  }
  if (!transformer) {
    return "";
  }
  return getSrcSetEntries({ ...options, transformer }).map((transform2) => {
    const url = transformer(transform2);
    return `${url == null ? void 0 : url.toString()} ${transform2.width}w`;
  }).join(",\n");
};
function transformSharedProps({
  width,
  height,
  priority,
  layout = "constrained",
  aspectRatio,
  ...props
}) {
  width = width && Number(width) || void 0;
  height = height && Number(height) || void 0;
  if (priority) {
    props.loading || (props.loading = "eager");
    props.fetchpriority || (props.fetchpriority = "high");
  } else {
    props.loading || (props.loading = "lazy");
    props.decoding || (props.decoding = "async");
  }
  if (props.alt === "") {
    props.role || (props.role = "presentation");
  }
  if (aspectRatio) {
    if (width) {
      if (height) ;
      else {
        height = width / aspectRatio;
      }
    } else if (height) {
      width = height * aspectRatio;
    } else ;
  } else if (width && height) {
    aspectRatio = width / height;
  } else ;
  return {
    width,
    height,
    aspectRatio,
    layout,
    ...props
  };
}
function transformProps(props) {
  let {
    src,
    cdn,
    transformer,
    background,
    layout,
    objectFit,
    breakpoints,
    width,
    height,
    aspectRatio,
    unstyled,
    ...transformedProps
  } = transformSharedProps(props);
  const canonical = src ? getCanonicalCdnForUrl(src, cdn) : void 0;
  let url = src;
  if (canonical) {
    url = canonical.url;
    transformer || (transformer = getTransformer(canonical.cdn));
  }
  if (transformer && background === "auto") {
    const lowResHeight = aspectRatio ? Math.round(LOW_RES_WIDTH / aspectRatio) : void 0;
    const lowResImage = transformer({
      url,
      width: LOW_RES_WIDTH,
      height: lowResHeight
    });
    if (lowResImage) {
      background = lowResImage.toString();
    }
  }
  const styleProps = {
    width,
    height,
    aspectRatio,
    layout,
    objectFit,
    background
  };
  transformedProps.sizes || (transformedProps.sizes = getSizes(width, layout));
  if (!unstyled) {
    transformedProps.style = {
      ...getStyle(styleProps),
      ...transformedProps.style
    };
  }
  if (transformer) {
    transformedProps.srcset = getSrcSet({
      src: url,
      width,
      height,
      aspectRatio,
      layout,
      breakpoints,
      transformer,
      cdn
    });
    const transformed = transformer({ url, width, height });
    if (transformed) {
      url = transformed;
    }
    if (layout === "fullWidth" || layout === "constrained") {
      width = void 0;
      height = void 0;
    }
  }
  return {
    ...transformedProps,
    src: url == null ? void 0 : url.toString(),
    width,
    height
  };
}
const h = /* @__PURE__ */ defineComponent({
  __name: "image",
  props: {
    src: {},
    width: {},
    height: {},
    layout: {},
    cdn: {},
    priority: { type: Boolean },
    background: {},
    aspectRatio: {},
    objectFit: {},
    unstyled: { type: Boolean },
    transformer: { type: Function }
  },
  setup(t) {
    const o = t, e = useAttrs(), r = computed(() => transformProps({ ...e, ...o }));
    return (m, l) => (openBlock(), createElementBlock("img", normalizeProps(guardReactiveProps(r.value)), null, 16));
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CldImage",
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
    restore: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { config, ...options } = props;
    const { url } = useCldImageUrl({ options, config });
    const transformUrl = () => {
      const options2 = {
        ...props
      };
      options2.width = typeof options2.width === "string" ? Number.parseInt(options2.width) : options2.width;
      options2.height = typeof options2.height === "string" ? Number.parseInt(options2.height) : options2.height;
      const { url: url2 } = useCldImageUrl({ options: options2, config });
      return url2;
    };
    const imgKey = ref("image-key");
    const handleError = async (payload) => {
      const eventPayload = payload.target;
      const result = await pollForProcessingImage(eventPayload);
      if (typeof result.error === "string" && false) ;
      if (result.success) imgKey.value = `${imgKey.value}-${Math.random()}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(h), mergeProps({
        key: imgKey.value,
        src: unref(url),
        layout: _ctx.layout || "constrained",
        width: _ctx.width,
        height: _ctx.height
      }, _ctx.$attrs, {
        alt: _ctx.alt,
        priority: _ctx.priority,
        cdn: "cloudinary",
        transformer: transformUrl,
        onError: handleError
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+cloudinary@4.0.0_magicast@0.3.5_typescript@5.8.3/node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldImage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CldImage-BZtOFhcU.mjs.map
