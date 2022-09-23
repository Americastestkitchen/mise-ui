import { StickerType } from '../../Cards/Cards';

export type SuggestionItem = {
  objectId: string,
  href: string,
  title: string,
  subtitle: string,
  imageUrl: string,
  siteKey: DomainSiteKey,
  resourceType: string,
  avgRating?: number,
  comments: number,
  numRatings?: number,
  stickers: StickerType[],
};

const suggestionItems: SuggestionItem[] = [
  {
    objectId: 'recipe_11359',
    href: '/recipes/11359-spaghetti-with-garlic-and-olive-oil',
    title: 'Spaghetti with Garlic and Olive Oil',
    subtitle: 'Serves 4 to 6 Takes 40 minutes',
    imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_3:4,c_fill,dpr_2.0,f_auto,fl_lossy,g_faces:auto,h_400,q_auto:low/43350-sfs-spaghetti-aglio-e-olio-68',
    siteKey: 'atk',
    resourceType: 'recipe',
    comments: 0,
    stickers: [],
  },
  {
    objectId: 'recipe_12376',
    href: '/recipes/12376-butter-basted-fish-fillets-with-garlic-and-thyme',
    title: 'Butter-Basted Fish Fillets with Garlic and Thyme',
    subtitle: 'Serves 2 Takes 30 minutes',
    imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_3:4,c_fill,dpr_2.0,f_auto,fl_lossy,g_faces:auto,h_400,q_auto:low/SFS_butter_basted_fish_fillets_garlic_thyme-114_1_ndjdam',
    siteKey: 'atk',
    avgRating: 4.2,
    resourceType: 'recipe',
    comments: 82,
    numRatings: 38,
    stickers: [
      { type: 'editorial', text: 'Make Ahead|Grilling & Barbecue|Weeknight Weeknight Weeknight' },
    ],
  },
  {
    objectId: 'recipe_14018',
    href: '/recipes/14018-balsamic-glazed-steaks-with-orzo-salad',
    title: 'Balsamic-Glazed Steaks with Orzo Salad',
    subtitle: 'Serves 4 Takes 1 hour',
    imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_3:4,c_fill,dpr_2.0,f_auto,fl_lossy,g_faces:auto,h_400,q_auto:low/SFS_BalsamicGlazedStripSteaksSummerVegetableOrzo-49_grkg7q',
    siteKey: 'atk',
    avgRating: 4.2,
    resourceType: 'recipe',
    comments: 82,
    numRatings: 38,
    stickers: [
      { type: 'editorial', text: 'Weeknight' },
    ],
  },
  {
    objectId: 'recipe_8835',
    href: '/recipes/recipes/8835-slow-cooker-beef-and-onion-ragu',
    title: 'Slow-Cooker Beef and Onion Ragu',
    subtitle: 'Serves 6 to 8 Takes 5 to 6 hours on high or 8 to 9 hours on low',
    imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_3:4,c_fill,dpr_2.0,f_auto,fl_lossy,g_faces:auto,h_400,q_auto:low/29734_sfs-slow-cooker-beef-and-onion-ragu-19',
    siteKey: 'atk',
    avgRating: 4.2,
    resourceType: 'recipe',
    comments: 82,
    numRatings: 38,
    stickers: [
      { type: 'editorial', text: 'Side Dishes' },
    ],
  },
  {
    objectId: 'recipe_4060',
    href: '/recipes/4060-zucchini-and-tomato-tian-with-caramelized-onions-tian-de-courgettes-aux-tomates',
    title: 'Zucchini and Tomato Tian with Caramelized Onions—Tian de Courgettes aux Tomates',
    subtitle: 'Serves 6',
    imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_3:4,c_fill,dpr_2.0,f_auto,fl_lossy,g_faces:auto,h_400,q_auto:low/29840_sfs-zucchini-and-tomato-tian-with-caramelized-onions-007',
    siteKey: 'atk',
    avgRating: 4.2,
    resourceType: 'recipe',
    comments: 82,
    numRatings: 38,
    stickers: [
      { type: 'editorial', text: 'Side Dishes' },
    ],
  },
];

export default suggestionItems;