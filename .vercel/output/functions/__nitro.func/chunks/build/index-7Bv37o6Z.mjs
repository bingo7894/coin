var REGEX_VERSION = /\/v\d+\//;
var REGEX_FORMAT = /\.(ai|avif|gif|png|webp|bmp|bw|djvu|dng|ps|ept|eps|eps3|fbx|flif|gif|glb|gltf|heif|heic|ico|indd|jpg|jpe|jpeg|jp2|wdp|jxr|hdp|obj|pdf|ply|png|psd|arw|cr2|svg|tga|tif|tiff|u3ma|usdz|webp|3g2|3gp|avi|flv|m3u8|ts|m2ts|mts|mov|mkv|mp4|mpeg|mpd|mxf|ogv|webm|wmv)$/i;
var REGEX_URL = /https?:\/\/(?<host>[^/]+)\/(?<cloudName>[^/]+)?\/?(?<assetType>image|images|video|videos|raw|files)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)?\/?(?<signature>s--([a-zA-Z0-9_-]{8}|[a-zA-Z0-9_-]{32})--)?\/?(?<transformations>(?:[^_/]+_[^,/]+,?\/?)*\/)*(?<version>v\d+|\w{1,2})\/(?<publicId>[^\s]+)$/;
var ASSET_TYPES_SEO = ["images", "videos", "files"];
var CLOUDINARY_DEFAULT_HOST = "res.cloudinary.com";
function parseUrl(src) {
  var _a, _b, _c, _d;
  if (typeof src !== "string") {
    throw new Error(`Failed to parse URL - Invalid src: Is not a string`);
  }
  const hasVersion = REGEX_VERSION.test(src);
  if (!hasVersion) {
    throw new Error(
      `Failed to parse URL - Invalid src: Does not include version (Ex: /v1234/)`
    );
  }
  const [baseUrlWithExtension, queryString] = src.split("?");
  const format = getFormat(baseUrlWithExtension);
  let baseUrl = baseUrlWithExtension;
  if (format) {
    baseUrl = baseUrlWithExtension.replace(new RegExp(`${format}$`), "");
  }
  const results = baseUrl.match(REGEX_URL);
  const transformations = (_b = (_a = results == null ? void 0 : results.groups) == null ? void 0 : _a.transformations) == null ? void 0 : _b.split("/").filter((t) => !!t);
  const parts = {
    ...results == null ? void 0 : results.groups,
    format,
    seoSuffix: void 0,
    transformations: transformations || [],
    queryParams: {},
    version: ((_c = results == null ? void 0 : results.groups) == null ? void 0 : _c.version) ? parseInt(results.groups.version.replace("v", "")) : void 0
  };
  if (parts.host === CLOUDINARY_DEFAULT_HOST && !parts.cloudName) {
    throw new Error(
      "Failed to parse URL - Invalid src: Cloudinary URL delivered from res.cloudinary.com must include Cloud Name (ex: res.cloudinary.com/<Cloud Name>/image/...)"
    );
  }
  if (queryString) {
    parts.queryParams = queryString.split("&").reduce((prev, curr) => {
      const [key, value] = curr.split("=");
      prev[key] = value;
      return prev;
    }, {});
  }
  if (parts.assetType && ASSET_TYPES_SEO.includes(parts.assetType)) {
    const publicIdParts = ((_d = parts.publicId) == null ? void 0 : _d.split("/")) || [];
    parts.seoSuffix = publicIdParts.pop();
    parts.publicId = publicIdParts.join("/");
  }
  if (parts.publicId) {
    parts.publicId = decodeURIComponent(parts.publicId);
  }
  return parts;
}
function getTransformations(src) {
  const { transformations = [] } = parseUrl(src) || {};
  return transformations.map((t) => t.split(","));
}
function getFormat(src) {
  const matches = src.match(REGEX_FORMAT);
  if (matches === null) return;
  return matches[0];
}
function normalizeNumberParameter(param) {
  if (typeof param !== "string") return param;
  return parseInt(param);
}
async function pollForProcessingImage(options) {
  try {
    const response = await fetch(options.src);
    if (response.status === 423) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return await pollForProcessingImage(options);
    }
    if (!response.ok) {
      return {
        success: false,
        status: response.status,
        error: response.headers.get("x-cld-error") || "Unknown error"
      };
    }
    return {
      success: true,
      status: response.status
    };
  } catch (error) {
    return {
      success: false,
      status: 500,
      error: error.message || "Network error"
    };
  }
}
function testColorIsHex(value) {
  if (typeof value !== "string") return false;
  return !!value.startsWith("#");
}
function convertColorHexToRgb(value) {
  return `rgb:${value.replace("#", "")}`;
}
function encodeBase64(value) {
  if (typeof btoa === "function") {
    return btoa(value);
  }
  if (typeof Buffer !== "undefined") {
    return Buffer.from(value).toString("base64");
  }
}
function objectHasKey(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function sortByKey(array = [], key, type = "asc") {
  function compare(a, b) {
    let keyA = a[key];
    let keyB = b[key];
    if (typeof keyA === "string") {
      keyA = keyA.toLowerCase();
    }
    if (typeof keyB === "string") {
      keyB = keyB.toLowerCase();
    }
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  }
  let newArray = [...array];
  newArray = newArray.sort(compare);
  if (type === "desc") {
    return newArray.reverse();
  }
  return newArray;
}
function isObject(a) {
  if (typeof a !== "object" || a instanceof Array) {
    return false;
  } else {
    return true;
  }
}
class Config {
  filterOutNonSupportedKeys(userProvidedConfig, validKeys) {
    const obj = /* @__PURE__ */ Object.create({});
    if (isObject(userProvidedConfig)) {
      Object.keys(userProvidedConfig).forEach((key) => {
        if (validKeys.indexOf(key) >= 0) {
          obj[key] = userProvidedConfig[key];
        } else {
          console.warn("Warning - unsupported key provided to configuration: ", key);
        }
      });
      return obj;
    } else {
      return /* @__PURE__ */ Object.create({});
    }
  }
}
const ALLOWED_URL_CONFIG = [
  "cname",
  "secureDistribution",
  "privateCdn",
  "signUrl",
  "longUrlSignature",
  "shorten",
  "useRootPath",
  "secure",
  "forceVersion",
  "analytics",
  "queryParams"
];
class URLConfig extends Config {
  /**
   * @param {IURLConfig} userURLConfig
   */
  constructor(userURLConfig) {
    super();
    const urlConfig = this.filterOutNonSupportedKeys(userURLConfig, ALLOWED_URL_CONFIG);
    Object.assign(this, {
      secure: true
    }, urlConfig);
  }
  extend(userURLConfig) {
    const urlConfig = this.filterOutNonSupportedKeys(userURLConfig, ALLOWED_URL_CONFIG);
    return new URLConfig(Object.assign({}, this, urlConfig));
  }
  /**
   * @param {string} value Sets the cname
   */
  setCname(value) {
    this.cname = value;
    return this;
  }
  /**
   * @param {string} value Sets the secureDistribution
   */
  setSecureDistribution(value) {
    this.secureDistribution = value;
    return this;
  }
  /**
   * @param {boolean} value Sets whether to use a private CDN (Removes cloudName from URL)
   */
  setPrivateCdn(value) {
    this.privateCdn = value;
    return this;
  }
  /**
   * @param value Sets whether or not to sign the URL
   */
  setSignUrl(value) {
    this.signUrl = value;
    return this;
  }
  /**
   * @param value Sets whether or not to use a long signature
   */
  setLongUrlSignature(value) {
    this.longUrlSignature = value;
    return this;
  }
  /**
   * @param value Sets whether or not to shorten the URL
   */
  setShorten(value) {
    this.shorten = value;
    return this;
  }
  /**
   * @param value Sets whether or not to use a root path
   */
  setUseRootPath(value) {
    this.useRootPath = value;
    return this;
  }
  /**
   * @param value Sets whether or not to deliver the asset through https
   */
  setSecure(value) {
    this.secure = value;
    return this;
  }
  /**
   * @param value Sets whether to force a version in the URL
   */
  setForceVersion(value) {
    this.forceVersion = value;
    return this;
  }
  /**
   * @param params Sets additional params
   */
  setQueryParams(params) {
    this.queryParams = params;
    return this;
  }
}
class QualifierValue {
  /**
   *
   * @param {QualifierValue | QualifierValue[] | any[] | string | number}qualifierValue
   */
  constructor(qualifierValue) {
    this.values = [];
    this.delimiter = ":";
    if (this.hasValue(qualifierValue)) {
      this.addValue(qualifierValue);
    }
  }
  /**
   * @description Joins the provided values with the provided delimiter
   */
  toString() {
    return this.values.join(this.delimiter);
  }
  /**
   * @description Checks if the provided argument has a value
   * @param {any} v
   * @private
   * @return {boolean}
   */
  hasValue(v) {
    return typeof v !== "undefined" && v !== null && v !== "";
  }
  /**
   * @desc Adds a value for the this qualifier instance
   * @param {any} value
   * @return {this}
   */
  addValue(value) {
    if (Array.isArray(value)) {
      this.values = this.values.concat(value);
    } else {
      this.values.push(value);
    }
    this.values = this.values.filter((v) => this.hasValue(v));
    return this;
  }
  /**
   * @description Sets the delimiter for this instance
   * @param delimiter
   */
  setDelimiter(delimiter) {
    this.delimiter = delimiter;
    return this;
  }
}
class UnsupportedError extends Error {
  constructor(message = "Unsupported") {
    super(message);
  }
}
function createUnsupportedError(message) {
  return new UnsupportedError(message);
}
function qualifierToJson() {
  return this._qualifierModel || { error: createUnsupportedError(`unsupported qualifier ${this.constructor.name}`) };
}
class QualifierModel {
  constructor() {
    this._qualifierModel = {};
  }
  toJson() {
    return qualifierToJson.apply(this);
  }
}
class Qualifier extends QualifierModel {
  constructor(key, qualifierValue) {
    super();
    this.delimiter = "_";
    this.key = key;
    if (qualifierValue instanceof QualifierValue) {
      this.qualifierValue = qualifierValue;
    } else {
      this.qualifierValue = new QualifierValue();
      this.qualifierValue.addValue(qualifierValue);
    }
  }
  toString() {
    const { key, delimiter, qualifierValue } = this;
    return `${key}${delimiter}${qualifierValue.toString()}`;
  }
  addValue(value) {
    this.qualifierValue.addValue(value);
    return this;
  }
}
class FlagQualifier extends Qualifier {
  constructor(flagType, flagValue) {
    let qualifierValue;
    if (flagValue) {
      qualifierValue = new QualifierValue([flagType, `${flagValue}`]).setDelimiter(":");
    } else {
      qualifierValue = flagType;
    }
    super("fl", qualifierValue);
    this.flagValue = flagValue;
  }
  toString() {
    return super.toString().replace(/\./g, "%2E");
  }
  getFlagValue() {
    return this.flagValue;
  }
}
function mapToSortedArray(map, flags) {
  const array = Array.from(map.entries());
  flags.forEach((flag) => {
    array.push(["fl", flag]);
  });
  return array.sort().map((v) => v[1]);
}
function actionToJson() {
  var _a, _b, _c;
  const actionModelIsNotEmpty = this._actionModel && Object.keys(this._actionModel).length;
  const sourceTransformationError = (_c = (_b = (_a = this._actionModel) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.transformation) === null || _c === void 0 ? void 0 : _c.error;
  if (sourceTransformationError && sourceTransformationError instanceof Error) {
    return { error: sourceTransformationError };
  }
  if (actionModelIsNotEmpty) {
    return this._actionModel;
  }
  return { error: createUnsupportedError(`unsupported action ${this.constructor.name}`) };
}
class ActionModel {
  constructor() {
    this._actionModel = {};
  }
  toJson() {
    return actionToJson.apply(this);
  }
}
class Action extends ActionModel {
  constructor() {
    super(...arguments);
    this.qualifiers = /* @__PURE__ */ new Map();
    this.flags = [];
    this.delimiter = ",";
    this.actionTag = "";
  }
  prepareQualifiers() {
  }
  /**
   * @description Returns the custom name tag that was given to this action
   * @return {string}
   */
  getActionTag() {
    return this.actionTag;
  }
  /**
   * @description Sets the custom name tag for this action
   * @return {this}
   */
  setActionTag(tag) {
    this.actionTag = tag;
    return this;
  }
  /**
   * @description Calls toString() on all child qualifiers (implicitly by using .join()).
   * @return {string}
   */
  toString() {
    this.prepareQualifiers();
    return mapToSortedArray(this.qualifiers, this.flags).join(this.delimiter);
  }
  /**
   * @description Adds the parameter to the action.
   * @param {SDK.Qualifier} qualifier
   * @return {this}
   */
  addQualifier(qualifier) {
    if (typeof qualifier === "string") {
      const [key, value] = qualifier.toLowerCase().split("_");
      if (key === "fl") {
        this.flags.push(new FlagQualifier(value));
      } else {
        this.qualifiers.set(key, new Qualifier(key, value));
      }
    } else {
      this.qualifiers.set(qualifier.key, qualifier);
    }
    return this;
  }
  /**
   * @description Adds a flag to the current action.
   * @param {Qualifiers.Flag} flag
   * @return {this}
   */
  addFlag(flag) {
    if (typeof flag === "string") {
      this.flags.push(new FlagQualifier(flag));
    } else {
      if (flag instanceof FlagQualifier) {
        this.flags.push(flag);
      }
    }
    return this;
  }
  addValueToQualifier(qualifierKey, qualifierValue) {
    this.qualifiers.get(qualifierKey).addValue(qualifierValue);
    return this;
  }
}
function prepareColor(color) {
  if (color) {
    return color.match(/^#/) ? `rgb:${color.substr(1)}` : color;
  } else {
    return color;
  }
}
class BackgroundColor extends Action {
  constructor(color) {
    super();
    this._actionModel = {};
    this.addQualifier(new Qualifier("b", new QualifierValue(prepareColor(color)).setDelimiter("_")));
    this._actionModel.color = color;
    this._actionModel.actionType = "backgroundColor";
  }
  static fromJson(actionModel) {
    const { color } = actionModel;
    const result = new this(color);
    return result;
  }
}
class RawAction {
  constructor(raw) {
    this.raw = raw;
  }
  toString() {
    return this.raw;
  }
  toJson() {
    return { error: createUnsupportedError(`unsupported action ${this.constructor.name}`) };
  }
}
function isErrorObject(obj) {
  const errorObj = obj;
  return "error" in errorObj && !!errorObj.error;
}
function lossy() {
  return new FlagQualifier("lossy");
}
function preserveTransparency() {
  return new FlagQualifier("preserve_transparency");
}
function progressive(mode) {
  return new FlagQualifier("progressive", mode);
}
class FormatQualifier extends QualifierValue {
  constructor(val) {
    super(val);
    this.val = val;
  }
  getValue() {
    return this.val;
  }
}
function objectFlip(obj) {
  const result = {};
  Object.keys(obj).forEach((key) => {
    result[obj[key]] = key;
  });
  return result;
}
const ACTION_TYPE_TO_CROP_MODE_MAP = {
  limitFit: "limit",
  limitFill: "lfill",
  minimumFit: "mfit",
  thumbnail: "thumb",
  limitPad: "lpad",
  minimumPad: "mpad",
  autoPad: "auto_pad"
};
const ACTION_TYPE_TO_DELIVERY_MODE_MAP = {
  colorSpace: "cs",
  dpr: "dpr",
  density: "dn",
  defaultImage: "d",
  format: "f",
  quality: "q"
};
const ACTION_TYPE_TO_EFFECT_MODE_MAP = {
  redEye: "redeye",
  advancedRedEye: "adv_redeye",
  oilPaint: "oil_paint",
  unsharpMask: "unsharp_mask",
  makeTransparent: "make_transparent",
  generativeRestore: "gen_restore",
  upscale: "upscale"
};
const ACTION_TYPE_TO_QUALITY_MODE_MAP = {
  autoBest: "auto:best",
  autoEco: "auto:eco",
  autoGood: "auto:good",
  autoLow: "auto:low",
  jpegminiHigh: "jpegmini:1",
  jpegminiMedium: "jpegmini:2",
  jpegminiBest: "jpegmini:0"
};
const ACTION_TYPE_TO_STREAMING_PROFILE_MODE_MAP = {
  fullHd: "full_hd",
  fullHdWifi: "full_hd_wifi",
  fullHdLean: "full_hd_lean",
  hdLean: "hd_lean"
};
const CHROMA_VALUE_TO_CHROMA_MODEL_ENUM = {
  444: "CHROMA_444",
  420: "CHROMA_420"
};
const COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP = {
  "noCmyk": "no_cmyk",
  "keepCmyk": "keep_cmyk",
  "tinySrgb": "tinysrgb",
  "srgbTrueColor": "srgb:truecolor"
};
objectFlip(CHROMA_VALUE_TO_CHROMA_MODEL_ENUM);
objectFlip(COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP);
objectFlip(ACTION_TYPE_TO_CROP_MODE_MAP);
const DELIVERY_MODE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_DELIVERY_MODE_MAP);
objectFlip(ACTION_TYPE_TO_EFFECT_MODE_MAP);
objectFlip(ACTION_TYPE_TO_QUALITY_MODE_MAP);
objectFlip(ACTION_TYPE_TO_STREAMING_PROFILE_MODE_MAP);
class DeliveryAction extends Action {
  /**
   * @param {string} deliveryKey A generic Delivery Action Key (such as q, f, dn, etc.)
   * @param {string} deliveryType A Format Qualifiers for the action, such as Quality.auto()
   * @param {string} modelProperty internal model property of the action, for example quality uses `level` while dpr uses `density`
   * @see Visit {@link Actions.Delivery|Delivery} for an example
   */
  constructor(deliveryKey, deliveryType, modelProperty) {
    super();
    this._actionModel = {};
    let deliveryTypeValue;
    if (deliveryType instanceof FormatQualifier) {
      deliveryTypeValue = deliveryType.getValue();
    } else {
      deliveryTypeValue = deliveryType;
    }
    this._actionModel.actionType = DELIVERY_MODE_TO_ACTION_TYPE_MAP[deliveryKey];
    this._actionModel[modelProperty] = deliveryTypeValue;
    this.addQualifier(new Qualifier(deliveryKey, deliveryType));
  }
}
class ProgressiveQualifier extends FlagQualifier {
  constructor(mode) {
    super("progressive", mode);
  }
}
class DeliveryFormatAction extends DeliveryAction {
  constructor(deliveryKey, deliveryType) {
    super(deliveryKey, deliveryType, "formatType");
  }
  /**
   * @description Uses lossy compression when delivering animated GIF files.
   * @return {this}
   */
  lossy() {
    this._actionModel.lossy = true;
    this.addFlag(lossy());
    return this;
  }
  /**
   * @description Uses progressive compression when delivering JPG file format.
   * @return {this}
   */
  progressive(mode) {
    if (mode instanceof ProgressiveQualifier) {
      this._actionModel.progressive = { mode: mode.getFlagValue() };
      this.addFlag(mode);
    } else {
      this._actionModel.progressive = { mode };
      this.addFlag(progressive(mode));
    }
    return this;
  }
  /**
   * @description Ensures that images with a transparency channel are delivered in PNG format.
   */
  preserveTransparency() {
    this._actionModel.preserveTransparency = true;
    this.addFlag(preserveTransparency());
    return this;
  }
  static fromJson(actionModel) {
    const { formatType, lossy: lossy2, progressive: progressive2, preserveTransparency: preserveTransparency2 } = actionModel;
    let result;
    if (formatType) {
      result = new this("f", formatType);
    } else {
      result = new this("f");
    }
    if (progressive2) {
      if (progressive2.mode) {
        result.progressive(progressive2.mode);
      } else {
        result.progressive();
      }
    }
    lossy2 && result.lossy();
    preserveTransparency2 && result.preserveTransparency();
    return result;
  }
}
class Transformation {
  constructor() {
    this.actions = [];
  }
  /**
   * @param {SDK.Action | string} action
   * @return {this}
   */
  addAction(action) {
    let actionToAdd;
    if (typeof action === "string") {
      if (action.indexOf("/") >= 0) {
        throw "addAction cannot accept a string with a forward slash in it - /, use .addTransformation() instead";
      } else {
        actionToAdd = new RawAction(action);
      }
    } else {
      actionToAdd = action;
    }
    this.actions.push(actionToAdd);
    return this;
  }
  /**
   * @description Allows the injection of a raw transformation as a string into the transformation, or a Transformation instance that was previously created
   * @param {string | SDK.Transformation} tx
   * @example
   * import {Transformation} from "@cloudinary/url-gen";
   *
   * const transformation = new Transformation();
   * transformation.addTransformation('w_100/w_200/w_300');
   * @return {this}
   */
  addTransformation(tx) {
    if (tx instanceof Transformation) {
      this.actions = this.actions.concat(tx.actions);
    } else {
      this.actions.push(new RawAction(tx));
    }
    return this;
  }
  /**
   * @return {string}
   */
  toString() {
    return this.actions.map((action) => {
      return action.toString();
    }).filter((a) => a).join("/");
  }
  /**
   * @description Delivers an animated GIF.
   * @param {AnimatedAction} animatedAction
   * @return {this}
   */
  animated(animatedAction) {
    return this.addAction(animatedAction);
  }
  /**
   * @description Adds a border around the image.
   * @param {Border} borderAction
   * @return {this}
   */
  border(borderAction) {
    return this.addAction(borderAction);
  }
  /**
   * @description Adjusts the shape of the delivered image. </br>
   * <b>Learn more:</b> {@link https://cloudinary.com/documentation/effects_and_artistic_enhancements#distort|Shape changes and distortion effects}
   * @param {IReshape} reshapeAction
   * @return {this}
   */
  reshape(reshapeAction) {
    return this.addAction(reshapeAction);
  }
  /**
   * @description Resize the asset using provided resize action
   * @param {ResizeSimpleAction} resizeAction
   * @return {this}
   */
  resize(resizeAction) {
    return this.addAction(resizeAction);
  }
  /**
   * @desc An alias to Action Delivery.quality
   * @param {string|number} quality
   * @return {this}
   */
  quality(quality) {
    this.addAction(new DeliveryFormatAction("q", quality));
    return this;
  }
  /**
   * @desc An alias to Action Delivery.format
   * @param {string} format
   * @return {this}
   */
  format(format) {
    this.addAction(new DeliveryFormatAction("f", format));
    return this;
  }
  /**
   * @description Rounds the specified corners of an image.
   * @param roundCornersAction
   * @return {this}
   */
  roundCorners(roundCornersAction) {
    return this.addAction(roundCornersAction);
  }
  /**
   * @description Adds an overlay over the base image.
   * @param {LayerAction} overlayAction
   * @return {this}
   */
  overlay(overlayAction) {
    return this.addAction(overlayAction);
  }
  /**
   * @description Adds an underlay under the base image.
   * @param {LayerAction} underlayAction
   * @return {this}
   */
  underlay(underlayAction) {
    underlayAction.setLayerType("u");
    return this.addAction(underlayAction);
  }
  /**
   * @description Defines an new user variable.
   * @param {VariableAction} variableAction
   * @return {this}
   */
  addVariable(variableAction) {
    return this.addAction(variableAction);
  }
  /**
   * @description Specifies a condition to be met before applying a transformation.
   * @param {ConditionalAction} conditionAction
   * @return {this}
   */
  conditional(conditionAction) {
    return this.addAction(conditionAction);
  }
  /**
   * @description Applies a filter or an effect on an asset.
   * @param {SimpleEffectAction} effectAction
   * @return {this}
   */
  effect(effectAction) {
    return this.addAction(effectAction);
  }
  /**
   * @description Applies adjustment effect on an asset.
   * @param action
   * @return {this}
   */
  adjust(action) {
    return this.addAction(action);
  }
  /**
   * @description Rotates the asset by the given angle.
   * @param {RotateAction} rotateAction
   * @return {this}
   */
  rotate(rotateAction) {
    return this.addAction(rotateAction);
  }
  /**
   * @description Applies a pre-defined named transformation of the given name.
   * @param {NamedTransformation} namedTransformation
   * @return {this}
   */
  namedTransformation(namedTransformation) {
    return this.addAction(namedTransformation);
  }
  /**
   * @description Applies delivery action.
   * @param deliveryAction
   * @return {this}
   */
  delivery(deliveryAction) {
    return this.addAction(deliveryAction);
  }
  /**
   * @description Sets the color of the background.
   * @param {Qualifiers.Color} color
   * @return {this}
   */
  backgroundColor(color) {
    return this.addAction(new BackgroundColor(color));
  }
  /**
   * @description Adds a layer in a Photoshop document.
   * @param action
   * @return {this}
   */
  psdTools(action) {
    return this.addAction(action);
  }
  /**
   * @description Extracts an image or a page using an index, a range, or a name from a layered media asset.
   * @param action
   * @return {this}
   */
  extract(action) {
    return this.addAction(action);
  }
  /**
   * @description Adds a flag as a separate action.
   * @param {Qualifiers.Flag | string} flagQualifier
   * @return {this}
   */
  addFlag(flagQualifier) {
    const action = new Action();
    let flagToAdd = flagQualifier;
    if (typeof flagQualifier === "string") {
      flagToAdd = new FlagQualifier(flagQualifier);
    }
    action.addQualifier(flagToAdd);
    return this.addAction(action);
  }
  /**
   * @description Inject a custom function into the image transformation pipeline.
   * @return {this}
   */
  customFunction(customFunction) {
    return this.addAction(customFunction);
  }
  /**
   * Transcodes the video (or audio) to another format.
   * @param {Action} action
   * @return {this}
   */
  transcode(action) {
    return this.addAction(action);
  }
  /**
   * Applies the specified video edit action.
   *
   * @param {videoEditType} action
   * @return {this}
   */
  videoEdit(action) {
    return this.addAction(action);
  }
  toJson() {
    const actions = [];
    for (const action of this.actions) {
      const json = action.toJson();
      if (isErrorObject(json)) {
        return json;
      }
      actions.push(json);
    }
    return { actions };
  }
}
class ImageTransformation extends Transformation {
}
class VideoTransformation extends Transformation {
}
function isUrl(publicID) {
  return publicID.match(/^https?:\//);
}
function isFileName(publicID) {
  return publicID.indexOf("/") < 0;
}
function publicIDContainsVersion(publicID) {
  return publicID.match(/^v[0-9]+/);
}
function getUrlPrefix(cloudName, urlConfig) {
  const secure = urlConfig.secure;
  const privateCDN = urlConfig.privateCdn;
  const cname = urlConfig.cname;
  const secureDistribution = urlConfig.secureDistribution;
  if (!secure && !cname) {
    return `http://res.cloudinary.com/${cloudName}`;
  }
  if (secure && !secureDistribution && privateCDN) {
    return `https://${cloudName}-res.cloudinary.com`;
  }
  if (secure && !secureDistribution) {
    return `https://res.cloudinary.com/${cloudName}`;
  }
  if (secure && secureDistribution && privateCDN) {
    return `https://${secureDistribution}`;
  }
  if (secure && secureDistribution) {
    return `https://${secureDistribution}/${cloudName}`;
  }
  if (!secure && cname) {
    return `http://${cname}/${cloudName}`;
  } else {
    return "ERROR";
  }
}
function handleAssetType(assetType) {
  if (!assetType) {
    return "image";
  }
  return assetType;
}
function handleDeliveryType(deliveryType) {
  if (!deliveryType) {
    return "upload";
  }
  return deliveryType;
}
function getUrlVersion(publicID, version, forceVersion) {
  const shouldForceVersion = forceVersion !== false;
  if (version) {
    return `v${version}`;
  }
  if (publicIDContainsVersion(publicID) || isUrl(publicID) || isFileName(publicID)) {
    return "";
  }
  return shouldForceVersion ? "v1" : "";
}
function stringPad(value, _targetLength, _padString) {
  let targetLength = _targetLength >> 0;
  let padString = String(_padString);
  if (value.length > targetLength) {
    return String(value);
  } else {
    targetLength = targetLength - value.length;
    if (targetLength > padString.length) {
      padString += repeatStringNumTimes(padString, targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + String(value);
  }
}
function repeatStringNumTimes(string, _times) {
  let times = _times;
  let repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const base64Map = {};
let num = 0;
chars.split("").forEach((char) => {
  let key = num.toString(2);
  key = stringPad(key, 6, "0");
  base64Map[key] = char;
  num++;
});
function reverseVersion(semVer) {
  if (semVer.split(".").length < 2) {
    throw new Error("invalid semVer, must have at least two segments");
  }
  return semVer.split(".").reverse().map((segment) => {
    const asNumber = +segment;
    if (isNaN(asNumber) || asNumber < 0) {
      throw "Invalid version number provided";
    }
    return stringPad(segment, 2, "0");
  }).join(".");
}
function encodeVersion(semVer) {
  let strResult = "";
  const parts = semVer.split(".").length;
  const paddedStringLength = parts * 6;
  const paddedReversedSemver = reverseVersion(semVer);
  const num2 = parseInt(paddedReversedSemver.split(".").join(""));
  let paddedBinary = num2.toString(2);
  paddedBinary = stringPad(paddedBinary, paddedStringLength, "0");
  if (paddedBinary.length % 6 !== 0) {
    throw "Version must be smaller than 43.21.26)";
  }
  paddedBinary.match(/.{1,6}/g).forEach((bitString) => {
    strResult += base64Map[bitString];
  });
  return strResult;
}
function getAnalyticsOptions(options) {
  const analyticsOptions = {
    sdkSemver: options.sdkSemver,
    techVersion: options.techVersion,
    sdkCode: options.sdkCode,
    product: options.product,
    feature: "0"
  };
  if (options.accessibility) {
    analyticsOptions.feature = "D";
  }
  if (options.lazyload) {
    analyticsOptions.feature = "C";
  }
  if (options.responsive) {
    analyticsOptions.feature = "A";
  }
  if (options.placeholder) {
    analyticsOptions.feature = "B";
  }
  return analyticsOptions;
}
const packageVersion = "1.15.0";
function getNodeVersion() {
  const failedVersion = "0.0.0";
  {
    try {
      return process.versions.node || failedVersion;
    } catch (e) {
      return failedVersion;
    }
  }
}
function ensureShapeOfTrackedProperties(trackedAnalytics) {
  const defaults = {
    techVersion: getNodeVersion(),
    sdkCode: "T",
    sdkSemver: packageVersion.split("-")[0],
    product: "A",
    responsive: false,
    placeholder: false,
    lazyload: false,
    accessibility: false
  };
  if (!trackedAnalytics) {
    return defaults;
  } else {
    return Object.assign(Object.assign({}, defaults), trackedAnalytics);
  }
}
function getSDKAnalyticsSignature(_trackedAnalytics) {
  const trackedAnalytics = ensureShapeOfTrackedProperties(_trackedAnalytics);
  const analyticsOptions = getAnalyticsOptions(trackedAnalytics);
  try {
    const twoPartVersion = removePatchFromSemver(analyticsOptions.techVersion);
    const encodedSDKVersion = encodeVersion(analyticsOptions.sdkSemver);
    const encodedTechVersion = encodeVersion(twoPartVersion);
    const featureCode = analyticsOptions.feature;
    const SDKCode = analyticsOptions.sdkCode;
    const product = analyticsOptions.product;
    const algoVersion = "B";
    return `${algoVersion}${product}${SDKCode}${encodedSDKVersion}${encodedTechVersion}${featureCode}`;
  } catch (e) {
    return "E";
  }
}
function removePatchFromSemver(semVerStr) {
  const parts = semVerStr.split(".");
  return `${parts[0]}.${parts[1]}`;
}
const SEO_TYPES = {
  "image/upload": "images",
  "image/private": "private_images",
  "image/authenticated": "authenticated_images",
  "raw/upload": "files",
  "video/upload": "videos"
};
class CloudinaryFile {
  constructor(publicID, cloudConfig = {}, urlConfig) {
    this.setPublicID(publicID);
    this.setCloudConfig(cloudConfig);
    this.setURLConfig(urlConfig);
  }
  /**
   * @description Sets the URL Config for this asset
   * @param urlConfig
   * @return {this}
   */
  setURLConfig(urlConfig) {
    this.urlConfig = new URLConfig(urlConfig);
    return this;
  }
  /**
   * @description Sets the Cloud Config for this asset
   * @param urlConfig
   * @return {this}
   */
  setCloudConfig(cloudConfig) {
    this.cloudName = cloudConfig.cloudName;
    this.apiKey = cloudConfig.apiKey;
    this.apiSecret = cloudConfig.apiSecret;
    this.authToken = cloudConfig.authToken;
    return this;
  }
  /**
   * @description Sets the public ID of the asset.
   * @param {string} publicID The public ID of the asset.
   * @return {this}
   */
  setPublicID(publicID) {
    this.publicID = publicID ? publicID.toString() : "";
    return this;
  }
  /**
   * @description Sets the delivery type of the asset.
   * @param {DELIVERY_TYPE | string} newType The type of the asset.
   * @return {this}
   */
  setDeliveryType(newType) {
    this.deliveryType = newType;
    return this;
  }
  /**
   * @description Sets the URL SEO suffix of the asset.
   * @param {string} newSuffix The SEO suffix.
   * @return {this}
   */
  setSuffix(newSuffix) {
    this.suffix = newSuffix;
    return this;
  }
  /**
   * @description Sets the signature of the asset.
   * @param {string} signature The signature.
   * @return {this}
   */
  setSignature(signature) {
    this.signature = signature;
    return this;
  }
  /**
   * @description Sets the version of the asset.
   * @param {string} newVersion The version of the asset.
   * @return {this}
   */
  setVersion(newVersion) {
    if (newVersion) {
      this.version = newVersion;
    }
    return this;
  }
  /**
   * @description Sets the asset type.
   * @param {string} newType The type of the asset.
   * @return {this}
   */
  setAssetType(newType) {
    if (newType) {
      this.assetType = newType;
    }
    return this;
  }
  sign() {
    return this;
  }
  /**
   * @description Serializes to URL string
   * @param overwriteOptions
   */
  toURL(overwriteOptions = {}) {
    return this.createCloudinaryURL(null, overwriteOptions.trackedAnalytics);
  }
  /**
   * @description Validate various options before attempting to create a URL
   * The function will throw in case a violation
   * @throws Validation errors
   */
  validateAssetForURLCreation() {
    if (typeof this.cloudName === "undefined") {
      throw "You must supply a cloudName when initializing the asset";
    }
    const suffixContainsDot = this.suffix && this.suffix.indexOf(".") >= 0;
    const suffixContainsSlash = this.suffix && this.suffix.indexOf("/") >= 0;
    if (suffixContainsDot || suffixContainsSlash) {
      throw "`suffix`` should not include . or /";
    }
  }
  /**
   * @description return an SEO friendly name for a combination of asset/delivery, some examples:
   * * image/upload -> images
   * * video/upload -> videos
   * If no match is found, return `{asset}/{delivery}`
   */
  getResourceType() {
    const assetType = handleAssetType(this.assetType);
    const deliveryType = handleDeliveryType(this.deliveryType);
    const hasSuffix = !!this.suffix;
    const regularSEOType = `${assetType}/${deliveryType}`;
    const shortSEOType = SEO_TYPES[`${assetType}/${deliveryType}`];
    const useRootPath = this.urlConfig.useRootPath;
    const shorten = this.urlConfig.shorten;
    if (useRootPath) {
      if (regularSEOType === "image/upload") {
        return "";
      } else {
        throw new Error(`useRootPath can only be used with assetType: 'image' and deliveryType: 'upload'. Provided: ${regularSEOType} instead`);
      }
    }
    if (shorten && regularSEOType === "image/upload") {
      return "iu";
    }
    if (hasSuffix) {
      if (shortSEOType) {
        return shortSEOType;
      } else {
        throw new Error(`URL Suffix only supported for ${Object.keys(SEO_TYPES).join(", ")}, Provided: ${regularSEOType} instead`);
      }
    }
    return regularSEOType;
  }
  getSignature() {
    if (this.signature) {
      return `s--${this.signature}--`;
    } else {
      return "";
    }
  }
  /**
   *
   * @description Creates a fully qualified CloudinaryURL
   * @return {string} CloudinaryURL
   * @throws Validation Errors
   */
  createCloudinaryURL(transformation, trackedAnalytics) {
    if (!this.publicID) {
      return "";
    }
    this.validateAssetForURLCreation();
    const prefix = getUrlPrefix(this.cloudName, this.urlConfig);
    const transformationString = transformation ? transformation.toString() : "";
    const version = getUrlVersion(this.publicID, this.version, this.urlConfig.forceVersion);
    const publicID = this.publicID;
    if (typeof transformation === "string") {
      const url = [prefix, this.getResourceType(), this.getSignature(), transformationString, version, publicID.replace(/,/g, "%2C"), this.suffix].filter((a) => a).join("/");
      return url;
    } else {
      const safeURL = [
        encodeURI(prefix),
        this.getResourceType(),
        this.getSignature(),
        encodeURI(transformationString),
        version,
        encodeURI(publicID).replace(/,/g, "%2C"),
        this.suffix && encodeURI(this.suffix)
      ].filter((a) => a).join("/").replace(/\?/g, "%3F").replace(/=/g, "%3D");
      const shouldAddAnalytics = this.urlConfig.analytics !== false && !publicID.includes("?");
      let queryParamsString = "";
      if (typeof this.urlConfig.queryParams === "object") {
        try {
          const queryParams = new URLSearchParams(this.urlConfig.queryParams);
          if (shouldAddAnalytics) {
            queryParams.set("_a", getSDKAnalyticsSignature(trackedAnalytics));
          }
          queryParamsString = queryParams.toString();
        } catch (err) {
          console.error("Error: URLSearchParams is not available so the queryParams object cannot be parsed, please try passing as an already parsed string");
        }
      } else {
        queryParamsString = this.urlConfig.queryParams || "";
        if (shouldAddAnalytics) {
          queryParamsString += `${queryParamsString.length > 0 ? "&" : ""}_a=${getSDKAnalyticsSignature(trackedAnalytics)}`;
        }
      }
      if (queryParamsString) {
        return `${safeURL}?${queryParamsString}`;
      } else {
        return safeURL;
      }
    }
  }
}
class CloudinaryTransformable extends CloudinaryFile {
  constructor(publicID, cloudConfig, urlConfig, transformation) {
    super(publicID, cloudConfig, urlConfig);
    this.transformation = transformation;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Animated} animated
   * @return {this}
   */
  animated(animated) {
    this.transformation.animated(animated);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Border} border
   * @return {this}
   */
  border(border) {
    this.transformation.border(border);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Reshape} reshape
   * @return {this}
   */
  reshape(reshape) {
    this.transformation.reshape(reshape);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Resize} resize
   * @return {this}
   */
  resize(resize) {
    this.transformation.resize(resize);
    return this;
  }
  /**
   * @desc An alias to Action Delivery.quality
   * @param {string|number} quality
   * @return {this}
   */
  quality(quality) {
    this.addAction(new DeliveryFormatAction("q", quality));
    return this;
  }
  /**
   * @desc An alias to Action Delivery.format
   * @param {string} format
   * @return {this}
   */
  format(format) {
    this.addAction(new DeliveryFormatAction("f", format));
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.RoundCorners} roundCorners
   * @return {this}
   */
  roundCorners(roundCorners) {
    this.transformation.roundCorners(roundCorners);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @return {this}
   */
  overlay(overlayAction) {
    this.transformation.overlay(overlayAction);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Variable} variableAction
   * @return {this}
   */
  addVariable(variableAction) {
    this.transformation.addVariable(variableAction);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Condition} conditionalAction
   * @return {this}
   */
  conditional(conditionalAction) {
    this.transformation.conditional(conditionalAction);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Effect} effect
   * @return {this}
   */
  effect(effect) {
    this.transformation.effect(effect);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Adjust} action
   * @return {this}
   */
  adjust(action) {
    this.transformation.adjust(action);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Rotate} rotate
   * @return {this}
   */
  rotate(rotate) {
    this.transformation.rotate(rotate);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.NamedTransformation} namedTransformation
   * @return {this}
   */
  namedTransformation(namedTransformation) {
    this.transformation.namedTransformation(namedTransformation);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Delivery} deliveryAction
   * @return {this}
   */
  delivery(deliveryAction) {
    this.transformation.delivery(deliveryAction);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Qualifiers.color} color
   * @return {this}
   */
  backgroundColor(color) {
    this.transformation.backgroundColor(color);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.PSDTools} action
   * @return {this}
   */
  psdTools(action) {
    this.transformation.psdTools(action);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Extract} action
   * @return {this}
   */
  extract(action) {
    this.transformation.extract(action);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Qualifiers.Flag | string} flagQualifier
   * @return {this}
   */
  addFlag(flagQualifier) {
    this.transformation.addFlag(flagQualifier);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.CustomFunction} customFunction
   * @return {this}
   */
  customFunction(customFunction) {
    this.transformation.customFunction(customFunction);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {SDK.Action | string} action
   * @return {this}
   */
  addAction(action) {
    this.transformation.addAction(action);
    return this;
  }
  /**
   * @description Extend your transformation with another transformation
   * @param { string | SDK.Transformation } tx
   */
  addTransformation(tx) {
    this.transformation.addTransformation(tx);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @return {string}
   */
  toString() {
    return this.transformation.toString();
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @return {this}
   */
  underlay(underlayAction) {
    this.transformation.underlay(underlayAction);
    return this;
  }
  toURL(overwriteOptions = {}) {
    return this.createCloudinaryURL(this.transformation, overwriteOptions === null || overwriteOptions === void 0 ? void 0 : overwriteOptions.trackedAnalytics);
  }
}
class CloudinaryImage extends CloudinaryTransformable {
  constructor(publicID, cloudConfig, urlConfig) {
    super(publicID, cloudConfig, urlConfig, new ImageTransformation());
  }
}
class CloudinaryVideo extends CloudinaryTransformable {
  constructor(publicID, cloudConfig, urlConfig) {
    super(publicID, cloudConfig, urlConfig, new VideoTransformation());
    this.assetType = "video";
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Transcode} action
   * @return {this}
   */
  transcode(action) {
    this.transformation.transcode(action);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.VideoEdit} action
   * @return {this}
   */
  videoEdit(action) {
    this.transformation.videoEdit(action);
    return this;
  }
}
class Cloudinary {
  constructor(cloudinaryConfig) {
    if (cloudinaryConfig) {
      this.cloudinaryConfig = cloudinaryConfig;
    }
  }
  image(publicID) {
    return new CloudinaryImage(publicID, this.cloudinaryConfig.cloud, this.cloudinaryConfig.url);
  }
  video(publicID) {
    return new CloudinaryVideo(publicID, this.cloudinaryConfig.cloud, this.cloudinaryConfig.url);
  }
  setConfig(cloudinaryConfig) {
    this.cloudinaryConfig = cloudinaryConfig;
    return this;
  }
  getConfig() {
    return this.cloudinaryConfig;
  }
  extendConfig() {
  }
}
var plugin = (def) => ({
  strict: false,
  alwaysApply: false,
  ...def,
  apply: (cldAsset, ctx) => def.apply(cldAsset, ctx, ctx)
});
var AbrPlugin = /* @__PURE__ */ plugin({
  name: "Abr",
  supports: "video",
  inferOwnOptions: {},
  props: {
    streamingProfile: true
  },
  apply: (asset, opts) => {
    if (typeof opts.streamingProfile !== "string") return {};
    asset.addTransformation(`sp_${opts.streamingProfile}`);
    return {};
  }
});
var DefaultImagePlugin = /* @__PURE__ */ plugin({
  name: "DefaultImage",
  supports: "image",
  inferOwnOptions: {},
  props: { defaultImage: true },
  apply: (asset, opts) => {
    const { defaultImage } = opts;
    if (typeof defaultImage !== "string") return {};
    if (!getFormat(defaultImage)) {
      console.warn(
        `The defaultImage prop may be missing a format and must include it along with the public ID. (Ex: myimage.jpg)`
      );
    }
    const defaultImageId = defaultImage.replace(/\//g, ":");
    asset.addTransformation(`d_${defaultImageId}`);
    return {};
  }
});
var convertersColors = [
  {
    test: testColorIsHex,
    convert: convertColorHexToRgb
  }
];
var primary = {
  aspectRatio: {
    qualifier: "ar"
  },
  crop: {
    qualifier: "c"
  },
  gravity: {
    qualifier: "g"
  },
  height: {
    qualifier: "h"
  },
  width: { qualifier: "w" }
};
var position = {
  angle: {
    qualifier: "a"
  },
  gravity: {
    qualifier: "g"
  },
  x: { qualifier: "x" },
  y: { qualifier: "y" }
};
var text = {
  alignment: {
    qualifier: false,
    order: 6
  },
  antialias: {
    qualifier: "antialias"
  },
  border: {
    qualifier: "bo",
    location: "primary"
  },
  color: {
    qualifier: "co",
    location: "primary",
    converters: convertersColors
  },
  fontFamily: {
    qualifier: false,
    order: 1
  },
  fontSize: {
    qualifier: false,
    order: 2
  },
  fontStyle: {
    qualifier: false,
    order: 4
  },
  fontWeight: {
    qualifier: false,
    order: 3
  },
  hinting: {
    qualifier: "hinting"
  },
  letterSpacing: {
    qualifier: "letter_spacing"
  },
  lineSpacing: {
    qualifier: "line_spacing"
  },
  stroke: {
    qualifier: "self",
    order: 7
  },
  textDecoration: {
    qualifier: false,
    order: 5
  }
};
var effects = {
  angle: {
    qualifier: "a"
  },
  art: {
    prefix: "e",
    qualifier: "art"
  },
  autoBrightness: {
    prefix: "e",
    qualifier: "auto_brightness"
  },
  autoColor: {
    prefix: "e",
    qualifier: "auto_color"
  },
  autoContrast: {
    prefix: "e",
    qualifier: "auto_contrast"
  },
  assistColorblind: {
    prefix: "e",
    qualifier: "assist_colorblind"
  },
  background: {
    qualifier: "b"
  },
  blackwhite: {
    prefix: "e",
    qualifier: "blackwhite"
  },
  blur: {
    prefix: "e",
    qualifier: "blur"
  },
  blurFaces: {
    prefix: "e",
    qualifier: "blur_faces"
  },
  blurRegion: {
    prefix: "e",
    qualifier: "blur_region"
  },
  border: {
    qualifier: "bo"
  },
  brightness: {
    prefix: "e",
    qualifier: "brightness"
  },
  brightnessHSB: {
    prefix: "e",
    qualifier: "brightness_hsb"
  },
  cartoonify: {
    prefix: "e",
    qualifier: "cartoonify"
  },
  color: {
    qualifier: "co",
    converters: convertersColors
  },
  colorize: {
    prefix: "e",
    qualifier: "colorize"
  },
  contrast: {
    prefix: "e",
    qualifier: "contrast"
  },
  displace: {
    prefix: "e",
    qualifier: "distort"
  },
  distort: {
    prefix: "e",
    qualifier: "distort"
  },
  fillLight: {
    prefix: "e",
    qualifier: "fill_light"
  },
  gamma: {
    prefix: "e",
    qualifier: "gamma"
  },
  gradientFade: {
    prefix: "e",
    qualifier: "gradient_fade"
  },
  grayscale: {
    prefix: "e",
    qualifier: "grayscale"
  },
  hue: {
    prefix: "e",
    qualifier: "hue"
  },
  improve: {
    prefix: "e",
    qualifier: "improve"
  },
  loop: {
    prefix: "e",
    qualifier: "loop"
  },
  multiply: {
    prefix: "e",
    qualifier: "multiply"
  },
  negate: {
    prefix: "e",
    qualifier: "negate"
  },
  noise: {
    prefix: "e",
    qualifier: "noise"
  },
  oilPaint: {
    prefix: "e",
    qualifier: "oil_paint"
  },
  opacity: {
    qualifier: "o"
  },
  outline: {
    prefix: "e",
    qualifier: "outline"
  },
  pixelate: {
    prefix: "e",
    qualifier: "pixelate"
  },
  pixelateFaces: {
    prefix: "e",
    qualifier: "pixelate_faces"
  },
  pixelateRegion: {
    prefix: "e",
    qualifier: "pixelate_region"
  },
  radius: {
    qualifier: "r"
  },
  redeye: {
    prefix: "e",
    qualifier: "redeye"
  },
  replaceColor: {
    prefix: "e",
    qualifier: "replace_color"
  },
  saturation: {
    prefix: "e",
    qualifier: "saturation"
  },
  screen: {
    prefix: "e",
    qualifier: "screen"
  },
  sepia: {
    prefix: "e",
    qualifier: "sepia"
  },
  shadow: {
    prefix: "e",
    qualifier: "shadow"
  },
  sharpen: {
    prefix: "e",
    qualifier: "sharpen"
  },
  shear: {
    prefix: "e",
    qualifier: "shear"
  },
  simulateColorblind: {
    prefix: "e",
    qualifier: "simulate_colorblind"
  },
  tint: {
    prefix: "e",
    qualifier: "tint"
  },
  trim: {
    prefix: "e",
    qualifier: "trim"
  },
  unsharpMask: {
    prefix: "e",
    qualifier: "unsharp_mask"
  },
  vectorize: {
    prefix: "e",
    qualifier: "vectorize"
  },
  vibrance: {
    prefix: "e",
    qualifier: "vibrance"
  },
  vignette: {
    prefix: "e",
    qualifier: "vignette"
  }
};
function constructTransformation({
  prefix,
  qualifier,
  value,
  converters
}) {
  let transformation = "";
  if (prefix) {
    transformation = `${prefix}_`;
  }
  let transformationValue = value;
  converters == null ? void 0 : converters.forEach(({ test, convert }) => {
    if (!test(transformationValue)) return;
    transformationValue = convert(transformationValue);
  });
  if (transformationValue === true || transformationValue === "true") {
    return `${transformation}${qualifier}`;
  }
  if (typeof transformationValue === "string" || typeof transformationValue === "number") {
    if (prefix) {
      return `${transformation}${qualifier}:${transformationValue}`;
    } else {
      return `${qualifier}_${transformationValue}`;
    }
  }
}
function promptArrayToString(promptArray) {
  return `(${promptArray.join(";")})`;
}
var isArray = Array.isArray;
var entriesOf = Object.entries;
var throwError = (message, ctor = Error) => {
  throw new ctor(message);
};
var EffectsPlugin = /* @__PURE__ */ plugin({
  name: "Effects",
  supports: "all",
  inferOwnOptions: {},
  props: {
    angle: true,
    art: true,
    autoBrightness: true,
    autoColor: true,
    autoContrast: true,
    assistColorblind: true,
    background: true,
    blackwhite: true,
    blur: true,
    blurFaces: true,
    blurRegion: true,
    border: true,
    brightness: true,
    brightnessHSB: true,
    cartoonify: true,
    color: true,
    colorize: true,
    contrast: true,
    displace: true,
    distort: true,
    fillLight: true,
    gamma: true,
    gradientFade: true,
    grayscale: true,
    hue: true,
    improve: true,
    loop: true,
    multiply: true,
    negate: true,
    noise: true,
    oilPaint: true,
    opacity: true,
    outline: true,
    pixelate: true,
    pixelateFaces: true,
    pixelateRegion: true,
    radius: true,
    redeye: true,
    replaceColor: true,
    saturation: true,
    screen: true,
    sepia: true,
    shadow: true,
    sharpen: true,
    shear: true,
    simulateColorblind: true,
    tint: true,
    trim: true,
    unsharpMask: true,
    vectorize: true,
    vibrance: true,
    vignette: true,
    effects: true
  },
  apply: (cldAsset, opts) => {
    const transformationStrings = constructTransformationString({
      effects,
      options: opts
    });
    transformationStrings.forEach((transformation) => {
      if (transformation) {
        cldAsset.addTransformation(transformation);
      }
    });
    if (isArray(opts == null ? void 0 : opts.effects)) {
      opts == null ? void 0 : opts.effects.forEach((effectsSet) => {
        const transformationString = constructTransformationString({
          effects,
          options: effectsSet
        }).filter((t) => !!t).join(",");
        cldAsset.addTransformation(transformationString);
      });
    }
    function constructTransformationString({
      effects: effects2,
      options
    }) {
      return Object.keys(effects2).map(
        (key) => {
          const { prefix, qualifier, converters } = effects2[key];
          return constructTransformation({
            qualifier,
            prefix,
            value: options == null ? void 0 : options[key],
            converters
          });
        }
      );
    }
    return {};
  }
});
var defaultCrop = "pad";
var FillBackgroundPlugin = /* @__PURE__ */ plugin({
  name: "FillBackground",
  supports: "image",
  inferOwnOptions: {},
  props: {
    fillBackground: true
  },
  apply: (cldAsset, opts, ctx) => {
    const { fillBackground } = opts;
    if (typeof fillBackground === "undefined") return {};
    const width = normalizeNumberParameter(ctx.width);
    const height = normalizeNumberParameter(ctx.height);
    const hasDefinedDimensions = typeof height === "number" && typeof width === "number";
    let aspectRatio = ctx.aspectRatio;
    if (!aspectRatio && hasDefinedDimensions) {
      aspectRatio = `${width}:${height}`;
    }
    if (!aspectRatio) {
      return {};
    }
    if (fillBackground === true) {
      const properties = [
        "b_gen_fill",
        `ar_${aspectRatio}`,
        `c_${defaultCrop}`
      ];
      cldAsset.addTransformation(properties.join(","));
    } else if (typeof fillBackground === "object") {
      const { crop = defaultCrop, gravity, prompt } = fillBackground;
      const properties = [`ar_${aspectRatio}`, `c_${crop}`];
      if (typeof prompt === "string") {
        properties.unshift(`b_gen_fill:${prompt}`);
      } else {
        properties.unshift(`b_gen_fill`);
      }
      if (typeof gravity === "string") {
        properties.push(`g_${gravity}`);
      }
      cldAsset.addTransformation(properties.join(","));
    }
    return {};
  }
});
var FlagsPlugin = /* @__PURE__ */ plugin({
  name: "Flags",
  supports: "all",
  inferOwnOptions: {},
  props: {
    flags: true
  },
  apply: (cldAsset, { flags }) => {
    if (typeof flags === "string") {
      flags = [flags];
    }
    if (isArray(flags)) {
      flags.forEach((flag) => cldAsset.addFlag(flag));
    } else if (typeof flags === "object") {
      Object.entries(flags).forEach(([qualifier, value]) => {
        cldAsset.addTransformation(`fl_${qualifier}:${value}`);
      });
    }
    return {};
  }
});
var PreserveTransformationsPlugin = /* @__PURE__ */ plugin({
  name: "PreserveTransformations",
  supports: "all",
  inferOwnOptions: {},
  props: {
    preserveTransformations: true
  },
  apply: (cldAsset, opts, ctx) => {
    const { preserveTransformations = false } = opts;
    if (preserveTransformations) {
      try {
        if (ctx.src === void 0) {
          throw new Error("options.src was undefined");
        }
        const transformations = getTransformations(ctx.src).map(
          (t) => t.join(",")
        );
        transformations.flat().forEach((transformation) => {
          cldAsset.addTransformation(transformation);
        });
      } catch (e) {
        console.warn(
          `Failed to preserve transformations: ${e.message}`
        );
      }
    }
    return {};
  }
});
var RawTransformationsPlugin = /* @__PURE__ */ plugin({
  name: "RawTransformations",
  supports: "all",
  inferOwnOptions: {},
  props: {
    rawTransformations: true
  },
  apply: (cldAsset, opts) => {
    let { rawTransformations = [] } = opts;
    if (!isArray(rawTransformations)) {
      rawTransformations = [rawTransformations];
    }
    rawTransformations.forEach((transformation) => {
      cldAsset.addTransformation(transformation);
    });
    return {};
  }
});
var RecolorPlugin = /* @__PURE__ */ plugin({
  name: "Recolor",
  supports: "image",
  inferOwnOptions: {},
  props: {
    recolor: true
  },
  apply: (cldAsset, opts) => {
    const { recolor } = opts;
    const recolorOptions = {
      prompt: void 0,
      "to-color": void 0,
      multiple: void 0
    };
    if (isArray(recolor)) {
      if (isArray(recolor[0])) {
        recolorOptions.prompt = promptArrayToString(recolor[0]);
      } else {
        recolorOptions.prompt = recolor[0];
      }
      if (typeof recolor[1] === "string") {
        recolorOptions["to-color"] = recolor[1];
      }
    } else if (typeof recolor === "object") {
      if (typeof recolor.prompt === "string") {
        recolorOptions.prompt = recolor.prompt;
      } else if (isArray(recolor.prompt)) {
        recolorOptions.prompt = promptArrayToString(recolor.prompt);
      }
      if (typeof recolor.to === "string") {
        recolorOptions["to-color"] = recolor.to;
      }
      if (recolor.multiple === true) {
        recolorOptions.multiple = `true`;
      }
    }
    const transformation = Object.entries(recolorOptions).filter(([, value]) => !!value).map(([key, value]) => `${key}_${value}`).join(";");
    if (transformation) {
      cldAsset.addTransformation(`e_gen_recolor:${transformation}`);
    }
    return {};
  }
});
var RemoveBackgroundPlugin = /* @__PURE__ */ plugin({
  name: "RemoveBackground",
  supports: "image",
  inferOwnOptions: {},
  props: {
    removeBackground: true
  },
  apply: (cldAsset, opts) => {
    if (opts.removeBackground) {
      cldAsset.addTransformation("e_background_removal");
    }
    return {};
  }
});
var RemovePlugin = /* @__PURE__ */ plugin({
  name: "Remove",
  supports: "image",
  inferOwnOptions: {},
  props: {
    remove: true
  },
  apply: (cldAsset, opts) => {
    const { remove } = opts;
    const removeOptions = {
      prompt: void 0,
      region: void 0,
      multiple: void 0,
      "remove-shadow": void 0
    };
    if (typeof remove === "string") {
      removeOptions.prompt = remove;
    } else if (isArray(remove)) {
      removeOptions.prompt = promptArrayToString(remove);
    } else if (typeof remove === "object") {
      const hasPrompt = typeof remove.prompt === "string" || isArray(remove.prompt);
      const hasRegion = isArray(remove.region);
      if (hasPrompt && hasRegion) {
        throw new Error(
          "Invalid remove options: you can not have both a prompt and a region. More info: https://cloudinary.com/documentation/transformation_reference#e_gen_remove"
        );
      }
      if (typeof remove.prompt === "string") {
        removeOptions.prompt = remove.prompt;
      } else if (isArray(remove.prompt)) {
        removeOptions.prompt = promptArrayToString(remove.prompt);
      }
      if (isArray(remove.region)) {
        removeOptions.region = regionArrayToString(remove.region);
      }
      if (remove.multiple === true) {
        removeOptions.multiple = `true`;
      }
      if (remove.removeShadow === true) {
        removeOptions["remove-shadow"] = `true`;
      }
    }
    const transformation = Object.entries(removeOptions).filter(([, value]) => !!value).map(([key, value]) => `${key}_${value}`).join(";");
    if (transformation) {
      cldAsset.addTransformation(`e_gen_remove:${transformation}`);
    }
    return {};
  }
});
function regionArrayToString(regionArray) {
  const indexes = {
    0: "x",
    1: "y",
    2: "w",
    3: "h"
  };
  const regionString = regionArray.map((region, index) => {
    if (isArray(region)) {
      return regionArrayToString(region);
    }
    const key = indexes[index];
    return `${key}_${region}`;
  }).join(";");
  return `(${regionString})`;
}
var ReplaceBackgroundPlugin = /* @__PURE__ */ plugin({
  name: "ReplaceBackground",
  supports: "image",
  inferOwnOptions: {},
  props: {
    replaceBackground: true
  },
  apply: (cldAsset, opts) => {
    const { replaceBackground } = opts;
    if (!replaceBackground) return {};
    const properties = [];
    if (typeof replaceBackground === "object") {
      if (typeof replaceBackground.prompt !== "undefined") {
        properties.push(`prompt_${replaceBackground.prompt}`);
      }
      if (typeof replaceBackground.seed === "number") {
        properties.push(`seed_${replaceBackground.seed}`);
      }
    } else if (typeof replaceBackground === "string") {
      properties.push(`prompt_${replaceBackground}`);
    }
    let transformation = "e_gen_background_replace";
    if (properties.length > 0) {
      transformation = `${transformation}:${properties.join(";")}`;
    }
    cldAsset.addTransformation(transformation);
    return {};
  }
});
var ReplacePlugin = /* @__PURE__ */ plugin({
  name: "Replace",
  supports: "image",
  inferOwnOptions: {},
  props: {
    replace: true
  },
  apply: (cldAsset, opts) => {
    const { replace } = opts;
    if (!replace) return {};
    let from, to, preserveGeometry = false;
    if (isArray(replace)) {
      from = replace[0];
      to = replace[1];
      preserveGeometry = replace[2] || false;
    } else {
      from = replace.from;
      to = replace.to;
      preserveGeometry = replace.preserveGeometry || false;
    }
    const properties = [`e_gen_replace:from_${from}`, `to_${to}`];
    if (preserveGeometry) {
      properties.push(`preserve-geometry_${preserveGeometry}`);
    }
    cldAsset.addTransformation(properties.join(";"));
    return {};
  }
});
var RestorePlugin = /* @__PURE__ */ plugin({
  name: "Restore",
  supports: "image",
  inferOwnOptions: {},
  props: {
    restore: true
  },
  apply: (cldAsset, opts) => {
    const { restore } = opts;
    if (restore) {
      cldAsset.addTransformation("e_gen_restore");
    }
    return {};
  }
});
var SanitizePlugin = /* @__PURE__ */ plugin({
  name: "Sanitize",
  supports: "image",
  inferOwnOptions: {},
  props: {
    sanitize: true
  },
  alwaysApply: true,
  apply: (cldAsset, opts, ctx) => {
    const { sanitize = true } = opts;
    const shouldApplySanitizer = sanitize && (ctx.format === "svg" || cldAsset.publicID.endsWith(".svg"));
    if (shouldApplySanitizer) {
      cldAsset.addTransformation("fl_sanitize");
    }
    return {};
  }
});
var SeoPlugin = /* @__PURE__ */ plugin({
  name: "Seo",
  supports: "all",
  inferOwnOptions: {},
  props: {
    seoSuffix: true
  },
  apply: (cldAsset, opts, ctx) => {
    const { seoSuffix } = opts;
    if (typeof seoSuffix !== "string") return {};
    if (ctx.deliveryType === "fetch") {
      console.warn("SEO suffix is not supported with a delivery type of fetch");
    } else {
      cldAsset.setSuffix(seoSuffix);
    }
    return {};
  }
});
var UnderlaysPlugin = /* @__PURE__ */ plugin({
  name: "Underlays",
  supports: "all",
  inferOwnOptions: {},
  props: {
    underlay: true,
    underlays: true
  },
  apply: (cldAsset, opts) => {
    const { underlay, underlays = [] } = opts;
    const typeQualifier = "u";
    if (isArray(underlays)) {
      underlays.forEach(applyUnderlay);
    }
    if (typeof underlay === "string") {
      const underlayOptions = {
        publicId: underlay,
        crop: "fill",
        width: "1.0",
        height: "1.0",
        flags: ["relative"]
      };
      applyUnderlay(underlayOptions);
    }
    function applyUnderlay({
      publicId,
      type,
      position: position2,
      effects: layerEffects = [],
      flags: layerFlags = [],
      appliedFlags = [],
      ...options
    }) {
      const hasPublicId = typeof publicId === "string";
      const hasPosition = typeof position2 === "object";
      if (!hasPublicId) {
        console.warn(`An ${type} is missing a Public ID`);
        return;
      }
      let layerTransformation = `${typeQualifier}_${publicId.replace(
        /\//g,
        ":"
      )}`;
      const primary2 = [];
      const applied = [];
      entriesOf(options).forEach(([key, value]) => {
        if (!objectHasKey(primary, key)) return;
        const { qualifier } = primary[key];
        primary2.push(`${qualifier}_${value}`);
      });
      layerEffects.forEach((effect) => {
        Object.keys(effect).forEach((key) => {
          if (!objectHasKey(primary, key)) return;
          const { qualifier } = primary[key];
          primary2.push(`${qualifier}_${effect[key]}`);
        });
      });
      if (hasPosition) {
        entriesOf(position2).forEach(([key, value]) => {
          if (!objectHasKey(position, key)) return;
          const { qualifier } = position[key];
          applied.push(`${qualifier}_${value}`);
        });
      }
      const activeLayerFlags = isArray(layerFlags) ? layerFlags : [layerFlags];
      activeLayerFlags.forEach((flag) => primary2.push(`fl_${flag}`));
      const activeAppliedFlags = isArray(appliedFlags) ? appliedFlags : [appliedFlags];
      activeAppliedFlags.forEach((flag) => applied.push(`fl_${flag}`));
      layerTransformation = `${layerTransformation},${primary2.join(",")}`;
      layerTransformation = `${layerTransformation}/fl_layer_apply,fl_no_overflow`;
      if (applied.length > 0) {
        layerTransformation = `${layerTransformation},${applied.join(",")}`;
      }
      cldAsset.addTransformation(layerTransformation);
    }
    return {};
  }
});
var ZoompanPlugin = /* @__PURE__ */ plugin({
  name: "Zoompan",
  supports: "image",
  inferOwnOptions: {},
  props: {
    zoompan: true
  },
  apply: (cldAsset, opts) => {
    const { zoompan = false } = opts;
    const overrides = {
      format: void 0
    };
    if (zoompan === true) {
      cldAsset.addTransformation("e_zoompan");
    } else if (typeof zoompan === "string") {
      if (zoompan === "loop") {
        cldAsset.addTransformation("e_zoompan");
        cldAsset.addTransformation("e_loop");
      } else {
        cldAsset.addTransformation(`e_zoompan:${zoompan}`);
      }
    } else if (typeof zoompan === "object") {
      let zoompanEffect = "e_zoompan";
      if (typeof zoompan.options === "string") {
        zoompanEffect = `${zoompanEffect}:${zoompan.options}`;
      }
      cldAsset.addTransformation(zoompanEffect);
      let loopEffect;
      if (zoompan.loop === true) {
        loopEffect = "e_loop";
      } else if (typeof zoompan.loop === "string" || typeof zoompan.loop === "number") {
        loopEffect = `e_loop:${zoompan.loop}`;
      }
      if (loopEffect) {
        cldAsset.addTransformation(loopEffect);
      }
    }
    if (zoompan !== false) {
      overrides.format = "auto:animated";
    }
    return {
      options: overrides
    };
  }
});
var cropsAspectRatio = ["auto", "crop", "fill", "lfill", "fill_pad", "thumb"];
var cropsGravityAuto = ["auto", "crop", "fill", "lfill", "fill_pad", "thumb"];
var cropsWithZoom = ["crop", "thumb"];
var DEFAULT_CROP = "limit";
var CroppingPlugin = /* @__PURE__ */ plugin({
  name: "Cropping",
  supports: "all",
  inferOwnOptions: {},
  props: {
    aspectRatio: true,
    crop: true,
    gravity: true,
    zoom: true,
    height: true,
    width: true
  },
  // crop is applied even if the crop key is undefined
  apply: (asset, opts) => {
    let crops = [];
    if (typeof opts.crop === "string" || typeof opts.crop === "undefined") {
      crops.push({
        aspectRatio: opts.aspectRatio,
        height: opts.height,
        gravity: opts.gravity,
        type: opts.crop || DEFAULT_CROP,
        width: opts.width,
        zoom: opts.zoom
      });
    } else if (typeof opts.crop === "object" && !isArray(opts.crop)) {
      crops.push(opts.crop);
    } else if (isArray(opts.crop)) {
      crops = [...opts.crop];
    }
    if (crops.length === 1 && crops[0].source === true) {
      crops.push({
        aspectRatio: opts.aspectRatio,
        width: opts.width,
        height: opts.height,
        gravity: opts.gravity,
        type: DEFAULT_CROP,
        zoom: opts.zoom
      });
    }
    const finalTransformations = [];
    const sourceTransformations = [];
    for (const crop of crops) {
      const cropDimensions = {
        width: crop.width,
        height: crop.height
      };
      if (typeof cropDimensions.width === "undefined" && typeof crop.aspectRatio === "undefined") {
        cropDimensions.width = opts.width;
        if (typeof cropDimensions.height === "undefined") {
          cropDimensions.height = opts.height;
        }
      }
      const transformations = collectTransformations({
        aspectRatio: crop.aspectRatio,
        gravity: crop.gravity,
        type: crop.type || DEFAULT_CROP,
        x: crop.x,
        y: crop.y,
        zoom: crop.zoom,
        ...cropDimensions
      });
      if (transformations.length > 0) {
        if (crop.source === true) {
          sourceTransformations.push(transformations);
        } else {
          finalTransformations.push(transformations);
        }
      }
    }
    sourceTransformations.forEach((transformation) => {
      if (transformation.length > 0) {
        asset.addTransformation(transformation.join(","));
      }
    });
    const results = {
      options: {}
    };
    if (results.options && finalTransformations.length > 0) {
      results.options.resize = finalTransformations.map((transformation) => transformation.join(",")).join("/");
    }
    return results;
  }
});
function collectTransformations(collectOptions) {
  const { aspectRatio, type: crop, x, y, zoom } = collectOptions;
  let gravity = collectOptions.gravity;
  const height = normalizeNumberParameter(collectOptions.height);
  const width = normalizeNumberParameter(collectOptions.width);
  const transformations = [];
  const hasDefinedDimensions = height || width;
  const hasValidAspectRatio = aspectRatio && cropsAspectRatio.includes(crop);
  const hasXCoordinate = typeof x === "number" || typeof x === "string";
  const hasYCoordinate = typeof y === "number" || typeof y === "string";
  const hasDefinedCoordinates = hasXCoordinate || hasYCoordinate;
  if (crop && (hasDefinedDimensions || hasValidAspectRatio || hasDefinedCoordinates)) {
    transformations.push(`c_${crop}`);
  }
  if (hasValidAspectRatio) {
    transformations.push(`ar_${aspectRatio}`);
  }
  if (width) {
    transformations.push(`w_${width}`);
  }
  if (!["limit"].includes(crop) && typeof height === "number") {
    transformations.push(`h_${height}`);
  }
  if (hasXCoordinate) {
    transformations.push(`x_${x}`);
  }
  if (hasYCoordinate) {
    transformations.push(`y_${y}`);
  }
  if (!gravity && cropsGravityAuto.includes(crop) && !hasDefinedCoordinates) {
    gravity = "auto";
  }
  if (gravity) {
    if (gravity === "auto" && !cropsGravityAuto.includes(crop)) {
      console.warn(
        `Auto gravity can only be used with crop modes: ${cropsGravityAuto.join(
          ", "
        )}. Not applying gravity.`
      );
    } else {
      transformations.push(`g_${gravity}`);
    }
  }
  if (zoom) {
    if (zoom === "auto" && !cropsWithZoom.includes(crop)) {
      console.warn(
        `Zoom can only be used with crop modes: ${cropsWithZoom.join(
          ", "
        )}. Not applying zoom.`
      );
    } else {
      transformations.push(`z_${zoom}`);
    }
  }
  return transformations;
}
var EnhancePlugin = /* @__PURE__ */ plugin({
  name: "Enhance",
  supports: "image",
  inferOwnOptions: {},
  props: {
    enhance: true
  },
  apply: (cldAsset, opts) => {
    if (opts.enhance) {
      cldAsset.addTransformation("e_enhance");
    }
    return {};
  }
});
var ExtractPlugin = /* @__PURE__ */ plugin({
  name: "Extract",
  supports: "image",
  inferOwnOptions: {},
  props: {
    extract: true
  },
  apply: (cldAsset, { extract }) => {
    const properties = [];
    if (typeof extract === "string") {
      properties.push(`prompt_${extract}`);
    } else if (isArray(extract)) {
      properties.push(`prompt_${formatPrompts(extract)}`);
    } else {
      const prompt = formatPrompts(extract.prompt);
      if (prompt) {
        properties.push(`prompt_${prompt}`);
      }
      if (extract.invert === true) {
        properties.push("invert_true");
      }
      if (typeof extract.mode === "string") {
        properties.push(`mode_${extract.mode}`);
      }
      if (extract.multiple === true) {
        properties.push("multiple_true");
      }
    }
    if (properties.length > 0) {
      const transformation = `e_extract:${properties.join(";")}`;
      cldAsset.addTransformation(transformation);
    }
    return {};
  }
});
function formatPrompts(prompts) {
  if (typeof prompts === "string") return prompts;
  if (isArray(prompts)) {
    return `(${prompts.filter((prompt) => typeof prompt === "string").join(";")})`;
  }
  return void 0;
}
var NamedTransformationsPlugin = /* @__PURE__ */ plugin({
  name: "NamedTransformations",
  strict: true,
  supports: "all",
  inferOwnOptions: {},
  props: {
    namedTransformations: true,
    transformations: true
  },
  apply: (cldAsset, opts) => {
    const { transformations, namedTransformations } = opts;
    if (transformations && process.env.NODE_ENVIRONMENT === "development") {
      console.warn(
        "The transformations prop is deprecated. Please use namedTransformations instead."
      );
    }
    let _namedTransformations = namedTransformations || transformations || [];
    if (!isArray(_namedTransformations)) {
      _namedTransformations = [_namedTransformations];
    }
    _namedTransformations.forEach((transformation) => {
      cldAsset.addTransformation(`t_${transformation}`);
    });
    return {};
  }
});
var DEFAULT_TEXT_OPTIONS = {
  color: "black",
  fontFamily: "Arial",
  fontSize: 200,
  fontWeight: "bold"
};
var OverlaysPlugin = /* @__PURE__ */ plugin({
  name: "Overlays",
  supports: "all",
  inferOwnOptions: {},
  props: {
    overlays: true,
    text: true
  },
  apply: (cldAsset, opts) => {
    const { text: text2, overlays = [] } = opts;
    const type = "overlay";
    const typeQualifier = "l";
    if (isArray(overlays)) {
      overlays.forEach(applyOverlay);
    }
    if (typeof text2 === "string") {
      applyOverlay({
        text: Object.assign({}, DEFAULT_TEXT_OPTIONS, {
          text: text2
        })
      });
    } else if (typeof text2 === "object") {
      applyOverlay({
        text: Object.assign({}, DEFAULT_TEXT_OPTIONS, text2)
      });
    }
    function applyOverlay({
      publicId,
      url,
      position: position2,
      text: text3,
      effects: layerEffects = [],
      appliedEffects = [],
      flags: layerFlags = [],
      appliedFlags = [],
      ...options
    }) {
      var _a;
      const hasPublicId = typeof publicId === "string";
      const hasUrl = typeof url === "string";
      const hasText = typeof text3 === "object" || typeof text3 === "string";
      const hasPosition = typeof position2 === "object";
      if (!hasPublicId && !hasUrl && !hasText) {
        console.warn(`An ${type} is missing Public ID, URL, or Text`);
        return;
      }
      let layerTransformation;
      if (hasText) {
        layerTransformation = `${typeQualifier}_text`;
      } else if (hasPublicId) {
        layerTransformation = `${typeQualifier}_${publicId.replace(
          /\//g,
          ":"
        )}`;
      } else if (hasUrl) {
        layerTransformation = `${typeQualifier}_fetch:${encodeBase64(url)}`;
      }
      const primary2 = [];
      const applied = [];
      Object.keys(options).forEach((key) => {
        if (!objectHasKey(primary, key)) return;
        const { qualifier, converters } = primary[key];
        const transformation = constructTransformation({
          qualifier,
          value: options[key],
          converters
        });
        if (transformation) {
          primary2.push(transformation);
        }
      });
      layerEffects.forEach((effect) => {
        Object.keys(effect).forEach((key) => {
          const effectQualifier = primary[key] || effects[key] || position[key];
          if (!effectQualifier) return;
          const { qualifier, prefix, converters } = effectQualifier;
          const transformation = constructTransformation({
            qualifier,
            prefix,
            value: effect[key],
            converters
          });
          if (transformation) {
            primary2.push(transformation);
          }
        });
      });
      appliedEffects.forEach((effect) => {
        Object.keys(effect).forEach((key) => {
          const effectQualifier = primary[key] || effects[key] || position[key];
          if (!effectQualifier) return;
          const { qualifier, prefix, converters } = effectQualifier;
          const transformation = constructTransformation({
            qualifier,
            prefix,
            value: effect[key],
            converters
          });
          if (transformation) {
            applied.push(transformation);
          }
        });
      });
      const activeLayerFlags = isArray(layerFlags) ? layerFlags : [layerFlags];
      activeLayerFlags.forEach((flag) => {
        primary2.push(`fl_${flag}`);
      });
      const activeAppliedFlags = isArray(appliedFlags) ? appliedFlags : [appliedFlags];
      activeAppliedFlags.forEach((flag) => {
        applied.push(`fl_${flag}`);
      });
      if (hasText) {
        if (typeof text3 === "string") {
          text3 = {
            ...DEFAULT_TEXT_OPTIONS,
            text: text3
          };
        }
        const textTransformations = [];
        if (typeof text3 === "object") {
          const textOptions = entriesOf(text3).flatMap(
            ([key, value]) => {
              if (!text[key]) return [];
              return {
                ...text[key],
                key,
                value,
                order: text[key].order || 99
              };
            }
          );
          const sortedTextOptions = sortByKey(textOptions, "order");
          for (const textOption of sortedTextOptions) {
            const { key, value, qualifier, location, converters } = textOption;
            let textValue = value;
            converters == null ? void 0 : converters.forEach(({ test, convert }) => {
              if (!test(value)) return;
              textValue = convert(value);
            });
            if (location === "primary") {
              primary2.push(`${qualifier}_${textValue}`);
            } else if (qualifier === "self") {
              textTransformations.push(key);
            } else if (qualifier) {
              textTransformations.push(`${qualifier}_${textValue}`);
            } else {
              textTransformations.push(textValue);
            }
          }
        }
        const specialCharacters = {
          ".": "%2E",
          ",": "%2C",
          "/": "%2F"
        };
        let layerText = (text3 == null ? void 0 : text3.text) || "";
        if (typeof layerText === "string") {
          (_a = Object.keys(specialCharacters)) == null ? void 0 : _a.forEach((character) => {
            layerText = layerText == null ? void 0 : layerText.replace(
              character,
              specialCharacters[character]
            );
          });
        }
        layerTransformation = `${layerTransformation}:${textTransformations.join(
          "_"
        )}:${layerText}`;
      }
      if (hasPosition) {
        Object.entries(position2).forEach(([key, value]) => {
          if (!objectHasKey(position, key)) return;
          const { qualifier, converters } = position[key];
          const transformation = constructTransformation({
            qualifier,
            value,
            converters
          });
          if (transformation) {
            applied.push(transformation);
          }
        });
      }
      if (primary2.length > 0) {
        layerTransformation = `${layerTransformation},${primary2.join(",")}`;
      }
      layerTransformation = `${layerTransformation}/fl_layer_apply,fl_no_overflow`;
      if (applied.length > 0) {
        layerTransformation = `${layerTransformation},${applied.join(",")}`;
      }
      cldAsset.addTransformation(layerTransformation);
    }
    return {};
  }
});
var VersionPlugin = /* @__PURE__ */ plugin({
  name: "Version",
  supports: "all",
  inferOwnOptions: {},
  props: {
    version: true
  },
  apply: (cldAsset, opts) => {
    const { version } = opts;
    if (typeof version !== "string" && typeof version !== "number") return {};
    cldAsset.setVersion(`${version}`.replace("v", ""));
    return {};
  }
});
var transformationPlugins = [
  // Some features *must* be the first transformation applied
  // thus their plugins *must* come first in the chain
  EnhancePlugin,
  ExtractPlugin,
  RecolorPlugin,
  RemoveBackgroundPlugin,
  RemovePlugin,
  ReplacePlugin,
  ReplaceBackgroundPlugin,
  RestorePlugin,
  // Cropping needs to be before any other general transformations
  // as it provides the option of 2-step resizing where someone
  // can resize the "base" canvas as well as the final resize
  // mechanism commonly used for responsive resizing
  CroppingPlugin,
  // Raw transformations should always come before
  // other arguments to avoid conflicting with
  // added options via the component
  PreserveTransformationsPlugin,
  RawTransformationsPlugin,
  AbrPlugin,
  DefaultImagePlugin,
  EffectsPlugin,
  FillBackgroundPlugin,
  FlagsPlugin,
  OverlaysPlugin,
  SanitizePlugin,
  NamedTransformationsPlugin,
  SeoPlugin,
  UnderlaysPlugin,
  VersionPlugin,
  ZoompanPlugin
];
function constructCloudinaryUrl({ options, config = {}, analytics }) {
  var _a;
  if (analytics === false) {
    if (typeof (config == null ? void 0 : config.url) === "undefined") {
      config.url = {};
    }
    config.url.analytics = false;
  }
  const cld = new Cloudinary(config);
  if (typeof (options == null ? void 0 : options.src) !== "string") {
    throw Error(
      `Failed to construct Cloudinary URL: Missing source (src) in options.`
    );
  }
  if (!(options == null ? void 0 : options.assetType)) {
    options.assetType = "image";
  }
  const parsedOptions = {};
  let publicId;
  if (typeof options.src === "string" && /^https?:\/\//.test(options.src)) {
    try {
      const parts = parseUrl(options.src);
      publicId = parts == null ? void 0 : parts.publicId;
      parsedOptions.seoSuffix = parts == null ? void 0 : parts.seoSuffix;
      parsedOptions.version = parts == null ? void 0 : parts.version;
    } catch (e) {
    }
  }
  if (!publicId) {
    publicId = options.src;
  }
  entriesOf(parsedOptions).forEach(([key, value]) => {
    if (objectHasKey(options, key)) return;
    options[key] = value;
  });
  (_a = options.version) != null ? _a : options.version = 1;
  const normalizedAssetType = options.assetType === "image" || options.assetType === "images" ? "image" : options.assetType === "video" || options.assetType === "videos" ? "video" : throwError(`${options.assetType} is not a valid assetType`);
  const cldAsset = cld[normalizedAssetType](publicId);
  const pluginEffects = {};
  transformationPlugins.forEach(
    ({ name, apply, strict, supports, props }) => {
      var _a2;
      const shouldApply = Object.keys(props).some(
        (key) => options[key] !== void 0
      );
      if (!shouldApply) return;
      if (normalizedAssetType !== supports && supports !== "all") {
        console.warn(
          `${name} does not support assetType ${normalizedAssetType}`
        );
        return;
      }
      if (options.strictTransformations && !strict) {
        console.warn(`${name} does not support Strict Transformations.`);
        return;
      }
      const results = apply(cldAsset, options);
      const pluginOptions = (_a2 = results == null ? void 0 : results.options) != null ? _a2 : {};
      Object.assign(pluginEffects, pluginOptions);
    }
  );
  if (typeof pluginEffects.resize === "string") {
    cldAsset.addTransformation(pluginEffects.resize);
  }
  cldAsset.setDeliveryType((options == null ? void 0 : options.deliveryType) || "upload");
  if (!options.strictTransformations) {
    if (options == null ? void 0 : options.dpr) {
      let dpr = options.dpr;
      if (typeof dpr === "number") {
        dpr = dpr.toFixed(1);
      }
      cldAsset.addTransformation(`dpr_${dpr}`);
    }
    const defaultFormat = (options == null ? void 0 : options.format) === "default";
    const rawContainsFormat = searchAssetRawTransformations("f_", cldAsset, {
      matchType: "startsWith"
    });
    const rawContainsFormatAndExplicit = rawContainsFormat && typeof (options == null ? void 0 : options.format) !== "undefined";
    if ((pluginEffects == null ? void 0 : pluginEffects.format) || !defaultFormat && (!rawContainsFormat || rawContainsFormatAndExplicit)) {
      cldAsset.format((options == null ? void 0 : options.format) || (pluginEffects == null ? void 0 : pluginEffects.format) || "auto");
    }
    const defaultQuality = (options == null ? void 0 : options.quality) === "default";
    const rawContainsQuality = searchAssetRawTransformations("q_", cldAsset, {
      matchType: "startsWith"
    });
    const rawContainsQualityAndExplicit = rawContainsQuality && typeof (options == null ? void 0 : options.quality) !== "undefined";
    if (!defaultQuality && (!rawContainsQuality || rawContainsQualityAndExplicit)) {
      cldAsset.quality((options == null ? void 0 : options.quality) || "auto");
    }
  }
  return cldAsset.toURL({
    trackedAnalytics: typeof analytics === "object" ? analytics : void 0
  });
}
function searchAssetRawTransformations(query, asset, options) {
  if (typeof asset.transformation === "undefined") return;
  const { matchType = "includes" } = options || {};
  const transformations = asset.transformation.actions.flatMap(
    (transformation) => {
      return transformation.toString().split("/").flatMap((seg) => seg.split(","));
    }
  );
  const matches = transformations.filter((transformation) => {
    if (matchType === "startsWith") {
      return transformation.startsWith(query);
    } else {
      return transformation.includes(query);
    }
  });
  return matches.length > 0;
}
function getUploadWidgetOptions({ uploadSignature, ...options }, config) {
  const signed = typeof uploadSignature === "function";
  const { cloudName, apiKey } = (config == null ? void 0 : config.cloud) || {};
  if (!cloudName) {
    throw new Error(
      "A Cloudinary Cloud name is required, please make sure your environment variable is set and configured in your environment."
    );
  }
  if (signed && !apiKey) {
    throw new Error(
      "A Cloudinary API Key is required for signed requests, please make sure your environment variable is set and configured in your environment."
    );
  }
  if (!signed && !options.uploadPreset) {
    throw new Error(
      "A Cloudinary Upload Preset is required for unsigned uploads. Please specify an uploadPreset or configure signed uploads."
    );
  }
  const uploadOptions = {
    cloudName,
    apiKey,
    ...options
  };
  if (signed) {
    uploadOptions.uploadSignature = uploadSignature;
  }
  return uploadOptions;
}
var UPLOAD_WIDGET_EVENTS = {
  abort: "onAbort",
  "batch-cancelled": "onBatchCancelled",
  close: "onClose",
  "display-changed": "onDisplayChanged",
  publicid: "onPublicId",
  "queues-end": "onQueuesEnd",
  "queues-start": "onQueuesStart",
  retry: "onRetry",
  "show-completed": "onShowCompleted",
  "source-changed": "onSourceChanged",
  success: "onSuccess",
  tags: "onTags",
  "upload-added": "onUploadAdded"
};
function generateUploadWidgetResultCallback(options) {
  return function resultCallback(error, uploadResult) {
    if (error) {
      if (typeof options.onError === "function") {
        options.onError(error, uploadResult);
      }
    }
    if (typeof options.onResult === "function") {
      options.onResult(uploadResult);
    }
    const widgetEvent = typeof (uploadResult == null ? void 0 : uploadResult.event) === "string" && UPLOAD_WIDGET_EVENTS[uploadResult.event];
    if (typeof widgetEvent === "string" && typeof options[widgetEvent] === "function") {
      const callback = options[widgetEvent];
      callback(uploadResult);
    }
  };
}
function generateSignatureCallback({
  signatureEndpoint,
  fetch: fetcher
}) {
  return function generateSignature(callback, paramsToSign) {
    if (typeof signatureEndpoint === "undefined") {
      throw Error(
        "Failed to generate signature: signatureEndpoint property undefined."
      );
    }
    if (typeof fetcher === "undefined") {
      throw Error("Failed to generate signature: fetch property undefined.");
    }
    fetcher(signatureEndpoint, {
      method: "POST",
      body: JSON.stringify({
        paramsToSign
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => response.json()).then((result) => {
      callback(result.signature);
    }).catch((error) => {
      callback(null, error);
    });
  };
}
function getVideoPlayerOptions(options, config) {
  const {
    autoplay,
    controls = true,
    language,
    languages,
    logo = true,
    loop = false,
    muted = false,
    poster,
    src,
    transformation,
    quality = "auto",
    ...otherCldVidPlayerOptions
  } = options;
  const { cloudName } = (config == null ? void 0 : config.cloud) || {};
  const { secureDistribution, privateCdn } = (config == null ? void 0 : config.url) || {};
  if (!cloudName) {
    throw new Error(
      "A Cloudinary Cloud name is required, please make sure your environment variable is set and configured in your environment."
    );
  }
  let publicId = src || "";
  if (publicId.startsWith("http")) {
    try {
      const parts = parseUrl(src);
      if (typeof (parts == null ? void 0 : parts.publicId) === "string") {
        publicId = parts == null ? void 0 : parts.publicId;
      }
    } catch (e) {
    }
  }
  if (!publicId) {
    throw new Error(
      "Video Player requires a src, please make sure to configure your src as a public ID or Cloudinary URL."
    );
  }
  const playerTransformations = [
    { quality },
    // Normalize player transformations as an array
    ...isArray(transformation) ? transformation : [transformation]
  ];
  let logoOptions = {};
  if (typeof logo === "boolean") {
    logoOptions.showLogo = logo;
  } else if (typeof logo === "object") {
    logoOptions = {
      ...logoOptions,
      showLogo: true,
      logoImageUrl: logo.imageUrl,
      logoOnclickUrl: logo.onClickUrl
    };
  }
  let autoplayValue = false;
  let autoplayModeValue = void 0;
  if (typeof autoplay === "boolean" || autoplay === "true" || autoplay === "false") {
    autoplayValue = autoplay;
  }
  if (typeof autoplay === "string" && autoplay !== "true" && autoplay !== "false") {
    autoplayModeValue = autoplay;
  }
  const playerOptions = {
    cloud_name: cloudName,
    privateCdn,
    secureDistribution,
    autoplayMode: autoplayModeValue,
    autoplay: autoplayValue,
    controls,
    language,
    languages,
    loop,
    muted,
    publicId,
    transformation: playerTransformations,
    ...logoOptions,
    ...otherCldVidPlayerOptions
  };
  if (playerOptions.width && playerOptions.height && !playerOptions.aspectRatio) {
    playerOptions.aspectRatio = `${playerOptions.width}:${playerOptions.height}`;
  }
  if (typeof poster === "string") {
    playerOptions.posterOptions = {
      publicId: poster
    };
  } else if (typeof poster === "object") {
    if (typeof poster.src !== "string") {
      playerOptions.posterOptions = {
        publicId: constructCloudinaryUrl({
          options: {
            src: publicId,
            assetType: "video",
            format: "auto:image",
            ...poster
          },
          config
        })
      };
    } else {
      playerOptions.posterOptions = {
        publicId: constructCloudinaryUrl({
          options: {
            src: publicId,
            ...poster
          },
          config
        })
      };
    }
  }
  return playerOptions;
}

export { UPLOAD_WIDGET_EVENTS as U, generateUploadWidgetResultCallback as a, generateSignatureCallback as b, constructCloudinaryUrl as c, parseUrl as d, getVideoPlayerOptions as e, getUploadWidgetOptions as g, pollForProcessingImage as p };
//# sourceMappingURL=index-7Bv37o6Z.mjs.map
