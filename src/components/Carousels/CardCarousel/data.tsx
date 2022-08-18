const singlePersonItem = {
  description: 'Bridget\'s favorite fair food is deep fried twinkies: learn why on this <a href="#">episode of proof</a>',
  imgCloudinaryId: 'mise-play/Image_21_3x.png',
  name: 'Bridget Lancaster',
};

const singleItem = {
  contentType: 'recipe',
  contentTypeFormatted: 'Recipe',
  commentCount: 23,
  ctaText: '',
  ctaUrl: '',
  href: '/recipes/8125',
  imageAlt: 'Chocolate Crinkle Cookies',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/22391_sfs-chocolate-crinkle-cookies-35',
  objectId: 'recipe_8125',
  siteKey: 'atk',
  siteKeyFavorites: 'atk',
  title: 'Chocolate Crinkle Cookies',
};

const singleTallItem = {
  contentType: 'episode',
  dek: 'New episodes weekly',
  href: 'https://www.google.com',
  logoKey: 'atk',
  imageAlt: '',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/v1592937037/mise-play/tall-card.jpg',
  overlayColor: '#a53015',
  siteKey: 'cco',
  siteKeyFavorites: 'cco',
  stickers: [{ type: 'priority', text: 'Popular' }],
};

const singleHeroItem = {
  ctaText: 'Start Learning',
  contentType: 'skill',
  title: 'Tomatoes 101',
  href: 'https://www.google.com',
  logoKey: 'atk',
  backgroundCloudinaryId: 'mise-play/Image_3x.png',
  overlayColor: '#a53015',
  siteKey: 'atk',
  siteKeyFavorites: 'atk',
  sticker: { contentType: 'video', type: 'editorial', text: '4 videos' },
  description: 'Elle teaches you the basics of how to prepare tomatoes for cooking and preserving.',
  personHeadShot: {
    imgCloudinaryId: 'mise-play/Image_21_3x.png',
  },
};

const singleCategoryItem = {
  assetType: 'svgIcon',
  browsePath: '.americastestkitchen.com/reviews/browse?page=1&refinementList%5Bsearch_document_klass%5D=&refinementList%5Bsearch_review_type_list%5D=',
  svgId: 'star',
  tagline: 'Browse all Reviews',
};

export const personItems = new Array(6).fill(singlePersonItem);

export const items = new Array(6).fill(singleItem);

export const tallItems = new Array(6).fill(singleTallItem);

export const heroItems = new Array(6).fill(singleHeroItem);

export const categoryItems = new Array(6).fill(singleCategoryItem);
