import cloudinary from 'cloudinary-core';

const cloudinaryInstance = cloudinary.Cloudinary.new({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'hksqkdlah',
});

const baseImageConfig = {
  crop: 'fill',
  dpr: 2.0,
  fetch_format: 'auto',
  flags: ['lossy', 'progressive', 'strip_profile'],
  gravity: 'faces:auto',
  quality: 'auto:low',
  secure: true,
};

const isString = obj => (
  Object.prototype.toString.call(obj) === '[object String]'
);

const isFloat = n => Number(n) === n && n % 1 !== 0;

/**
 * Some Contentful-cloudinary images are coming back with decimal
 * aspect ratios - we want to convert those into standard string-based
 * values.
 * @param  {Integer|Float|String} aspectRatio
 * @return {String}               Normalized aspect ratio - 16:9, 1:1
 */
const normalizeAR = (aspectRatio) => {
  let [width, height] = [1, 1];
  if (aspectRatio) {
    if (isString(aspectRatio) && aspectRatio.includes(':')) {
      ([width, height] = aspectRatio.split(':'));
    } else if (isFloat(aspectRatio)) {
      width = Math.floor(aspectRatio * 10);
      height = 10;
    }
  }
  return `${width}:${height}`;
};

const imageConfig = {
  blank(aspectRatio = null) {
    const ratio = normalizeAR(aspectRatio);
    const [width, height] = ratio.split(':');
    const config = { height, width, crop: 'scale' };
    const { cloud_name, secure } = baseImageConfig; // eslint-disable-line camelcase
    if (aspectRatio) config.aspect_ratio = aspectRatio;
    return {
      ...config,
      cloud_name,
      secure,
    };
  },
  default(options = {}) {
    const config = { ...options };
    const { aspectRatio, height, width } = options;
    if (width && height && aspectRatio) {
      delete config.aspectRatio;
    }
    // set a sensible max-width if no dimensions were provided
    if (!width && !height) {
      config.width = 400;
    }
    return {
      ...baseImageConfig,
      ...config,
    };
  },
  gradientFade(strength = 8, edge = 'y_-0.5', backgroundColor = 'black') {
    return {
      effect: `gradient_fade:${strength},${edge},b_${backgroundColor}`,
    };
  },
  heroAd() {
    return {
      ...baseImageConfig,
      width: 272,
    };
  },
  heroCard() {
    return {
      ...baseImageConfig,
      ...imageConfig.gradientFade(),
    };
  },
  pairedProduct() {
    return {
      ...baseImageConfig,
      width: 150,
    };
  },
  singleProductDesktop() {
    return {
      ...baseImageConfig,
      width: 500,
    };
  },
  singleProductTablet() {
    return {
      ...baseImageConfig,
      width: 450,
    };
  },
  singleProductMobile() {
    return {
      ...baseImageConfig,
      width: 300,
    };
  },
  showcaseFreeTrialMobile() {
    return {
      ...baseImageConfig,
      aspectRatio: '17:10',
      width: 375,
    };
  },
  showcaseFreeTrialTablet() {
    return {
      ...baseImageConfig,
      aspectRatio: '34:33',
      width: 300,
    };
  },
  showcaseFreeTrialDesktop() {
    return {
      ...baseImageConfig,
      aspectRatio: '56:33',
      width: 500,
    };
  },
  showcaseSchoolAdMobile() {
    return {
      aspectRatio: '34:33',
      gravity: 'south_west',
      secure: true,
      width: 375,
    };
  },
  showcaseSchoolAdTablet() {
    return {
      aspectRatio: '34:33',
      gravity: 'south_west',
      secure: true,
      width: 300,
    };
  },
  showcaseSchoolAdDesktop() {
    return {
      aspectRatio: '56:33',
      gravity: 'south_west',
      secure: true,
      width: 500,
    };
  },
  membershipSingleMobile() {
    return {
      aspectRatio: '17:10',
      secure: true,
      width: 375,
    };
  },
  membershipSingleTablet() {
    return {
      aspectRatio: '34:33',
      secure: true,
      width: 300,
    };
  },
  membershipSingleDesktop() {
    return {
      aspectRatio: '56:33',
      secure: true,
      width: 500,
    };
  },
  atkSchoolLogoLockupMobile() {
    return {
      ...baseImageConfig,
      width: 205,
    };
  },
};

/**
 * Returns url for placeholder png for lazy loaded images
 * @param  {String} [aspectRatio=null] Aspect ratio for generated image
 * @return {String}                    Fully qualified url for a Cloudinary image
 */
const getBlankImage = (aspectRatio = null) => (
  cloudinaryInstance.url('blank_glkq7m', imageConfig.blank(aspectRatio))
);

/**
 * Returns Cloudinary url.
 * If second argument is a string, assume it matches a
 * configuration key (thumbnail, etc).
 * Pass remaining arguments (usually a config object)
 * to the specified template (or the default template)
 * Examples:
 * `getImageUrl('<someCloudinaryId>', 'thumbnail', { width: 75 })`
 *    => returns a 75x75 thumbnail
 * `getImageUrl('<someCloudinaryId>', { aspectRatio: '16:9', height: 300 })`
 *    => returns a 16:9 image that is 300px tall
 *  NOTE: documentation for valid options:
 *      https://cloudinary.com/documentation/image_transformation_reference
 * @param  {String} cloudinaryId Cloudinary primary key
 * @param  {Array} configArgs    Capture remaining arguments as array
 * @return {String}              Fully qualified url for a Cloudinary image
 */
const getImageUrl = (cloudinaryId, ...configArgs) => {
  if (!cloudinaryId) return null;
  const configKey = typeof configArgs[0] === 'string' ? configArgs.shift() : 'default';
  const key = imageConfig[configKey] ? configKey : 'default';
  const config = imageConfig[key].call(this, ...configArgs);
  if (config.aspectRatio) config.aspectRatio = normalizeAR(config.aspectRatio);
  return cloudinaryInstance.url(cloudinaryId, config);
};

const getGifSrcSet = (cloudinaryId, configKey, options) => {
  if (typeof imageConfig[configKey] === 'undefined') return {};
  const formats = { mp4: 'mp4', webm: 'webm', gif: 'gif', poster: 'auto' };
  let config;
  return Object.keys(formats).reduce((acc, fmt) => {
    config = imageConfig[configKey].call(this, { ...options, fetch_format: formats[fmt] });
    acc[fmt] = getImageUrl(cloudinaryId, config);
    return acc;
  }, {});
};

export default cloudinaryInstance;

export { getGifSrcSet, imageConfig, getBlankImage, getImageUrl };
