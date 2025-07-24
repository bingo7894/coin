import { u as useHead, w as useRuntimeConfig } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { d as parseUrl, e as getVideoPlayerOptions } from './index-7Bv37o6Z.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CldVideoPlayer",
  __ssrInlineRender: true,
  props: {
    width: {},
    height: {},
    aspectRatio: {},
    aiHighlightsGraph: { type: Boolean },
    bigPlayButton: { type: [Boolean, String] },
    colors: {},
    controlBar: {},
    controls: { type: Boolean, default: true },
    floatingWhenNotVisible: {},
    fluid: { type: Boolean },
    fontFace: {},
    hideContextMenu: { type: Boolean },
    interactionAreas: {},
    playbackRates: {},
    playlistWidget: {},
    posterOptions: {},
    showJumpControls: { type: Boolean },
    seekThumbnails: { type: Boolean },
    videoJS: {},
    autoPlay: { type: [String, Boolean], default: false },
    autoplay: { type: [String, Boolean] },
    autoShowRecommendations: { type: Boolean },
    loop: { type: Boolean, default: false },
    maxTries: {},
    muted: { type: Boolean, default: false },
    pictureInPictureToggle: { type: Boolean },
    playedEventPercents: {},
    playedEventTimes: {},
    playsinline: { type: Boolean, default: false },
    videoTimeout: {},
    withCredentials: { type: Boolean },
    chapters: { type: [Object, Boolean] },
    chaptersButton: { type: Boolean },
    preload: {},
    sourceTransformation: {},
    sourceTypes: {},
    textTracks: {},
    transformation: {},
    ads: {},
    analytics: { type: Boolean },
    allowUsageReport: { type: Boolean },
    cloudinaryAnalytics: { type: [Boolean, Object] },
    cname: {},
    privateCdn: { type: Boolean },
    queryParams: {},
    secureDistribution: {},
    language: {},
    languages: {},
    logo: { type: [Boolean, Object], default: true },
    poster: {},
    src: {},
    quality: { default: "auto" },
    autoplayMode: { default: "always" },
    className: {},
    id: {},
    onDataLoad: {},
    onError: {},
    onMetadataLoad: {},
    onPause: {},
    onPlay: {},
    onEnded: {},
    playerRef: {},
    version: { default: "1.11.1" },
    videoRef: {},
    config: {},
    disableRemotePlayback: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const {
      className,
      height,
      id,
      onDataLoad,
      onError,
      onMetadataLoad,
      onPause,
      onPlay,
      onEnded,
      src,
      transformation,
      version,
      quality,
      width,
      config
    } = props;
    const playerTransformations = Array.isArray(transformation) ? transformation : [transformation];
    let localPublicId = src;
    if (localPublicId.startsWith("http")) {
      try {
        const parts = parseUrl(src);
        if (typeof (parts == null ? void 0 : parts.publicId) === "string") {
          localPublicId = parts == null ? void 0 : parts.publicId;
        }
      } catch (e) {
        console.error(e);
      }
    }
    playerTransformations.unshift({
      quality
    });
    const cloudinaryRef = ref();
    const defaultVideoRef = ref();
    const videoRef = props.videoRef || defaultVideoRef;
    const defaultPlayerRef = ref();
    const playerRef = props.playerRef || defaultPlayerRef;
    const playerId = id || `player-${localPublicId.replace("/", "-")}`;
    let playerClassName = "cld-video-player cld-fluid";
    if (className) {
      playerClassName = `${playerClassName} ${className}`;
    }
    const events = {
      error: onError,
      loadeddata: onDataLoad,
      loadedmetadata: onMetadataLoad,
      pause: onPause,
      play: onPlay,
      ended: onEnded
    };
    function handleEvent(event) {
      const activeEvent = events[event.type];
      if (typeof activeEvent === "function") {
        activeEvent({
          player: playerRef.value,
          video: videoRef.value
        });
      }
    }
    const handleOnLoad = () => {
      if ("cloudinary" in void 0) {
        cloudinaryRef.value = (void 0).cloudinary;
        const playerOptions = getVideoPlayerOptions(
          {
            ...props,
            colors: props.colors || {},
            fontFace: props.fontFace || "",
            publicId: localPublicId,
            playedEventPercents: props.playedEventPercents || [25, 50, 75, 100],
            playedEventTimes: props.playedEventTimes || []
          },
          {
            cloud: {
              cloudName: useRuntimeConfig().public.cloudinary.cloudName
            },
            ...useRuntimeConfig().public.cloudinary.cloud,
            ...useRuntimeConfig().public.cloudinary.url,
            ...config
          }
        );
        playerRef.value = cloudinaryRef.value.videoPlayer(
          videoRef.value,
          JSON.parse(JSON.stringify(playerOptions))
        );
        Object.keys(events).forEach((key) => {
          var _a;
          if (typeof events[key] === "function") {
            (_a = playerRef.value) == null ? void 0 : _a.on(key, handleEvent);
          }
        });
      }
    };
    __expose({
      playerRef,
      videoRef
    });
    useHead({
      script: [
        {
          id: `cloudinary-videoplayer-${playerId}`,
          src: `https://unpkg.com/cloudinary-video-player@${version}/dist/cld-video-player.min.js`,
          onload: handleOnLoad,
          onerror: (e) => console.error(
            `Failed to load Cloudinary Video Player: ${e.message}`
          )
        }
      ],
      link: [
        {
          href: `https://unpkg.com/cloudinary-video-player@${version || "1.11.1"}/dist/cld-video-player.min.css`,
          rel: "stylesheet"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: { width: "100%", aspectRatio: `${unref(width)} / ${unref(height)}` }
      }, _attrs))}><video${ssrRenderAttr("id", unref(playerId))} class="${ssrRenderClass(unref(playerClassName))}"${ssrRenderAttr("width", unref(width))}${ssrRenderAttr("height", unref(height))}${ssrRenderAttr("disableRemotePlayback", _ctx.disableRemotePlayback)}></video></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+cloudinary@4.0.0_magicast@0.3.5_typescript@5.8.3/node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldVideoPlayer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CldVideoPlayer-DC6xAN0v.mjs.map
