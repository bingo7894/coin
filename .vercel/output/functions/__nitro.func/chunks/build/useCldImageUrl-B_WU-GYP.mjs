import { c as constructCloudinaryUrl } from './index-7Bv37o6Z.mjs';
import { w as useRuntimeConfig } from './server.mjs';

const version$1 = "3.17.7";
const nuxtPkg = {
  version: version$1
};
const version = "4.0.0";
const pkg = {
  version
};
const useCldImageUrl = (props) => {
  var _a, _b, _c;
  if (!props.options.src)
    console.error("`[@nuxtjs/cloudinary]`: Property `src` is missing");
  const moduleConfig = useRuntimeConfig().public.cloudinary;
  const cldCloudName = ((_b = (_a = props.config) == null ? void 0 : _a.cloud) == null ? void 0 : _b.cloudName) || ((_c = moduleConfig.cloud) == null ? void 0 : _c.cloudName) || (moduleConfig == null ? void 0 : moduleConfig.cloudName);
  if (!cldCloudName)
    console.warn("`[@nuxtjs/cloudinary]` Environment variable `CLOUDINARY_CLOUD_NAME` or property `cloudinary.cloudName` missing");
  let cldOptions = {
    options: {
      // Have to spread the options because otherwise getting the error about props being updated while they are readonly.
      ...props.options
    },
    config: {
      url: moduleConfig.url,
      cloud: {
        cloudName: cldCloudName,
        ...moduleConfig.cloud
      },
      ...props.config
    },
    analytics: false
  };
  if (moduleConfig.analytics) {
    cldOptions = {
      ...cldOptions,
      analytics: Object.assign({
        sdkCode: "D",
        sdkSemver: `${pkg.version.split(".")[0]}.0.0`,
        techVersion: `${nuxtPkg.version.split(".")[0]}.0.0`,
        product: "B"
      }, props.analytics)
    };
  }
  return {
    url: constructCloudinaryUrl(cldOptions)
  };
};

export { useCldImageUrl as u };
//# sourceMappingURL=useCldImageUrl-B_WU-GYP.mjs.map
