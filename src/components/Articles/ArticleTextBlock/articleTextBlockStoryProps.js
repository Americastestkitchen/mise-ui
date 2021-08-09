const includeDropCap = true;
const displayOptionBox = 'box';
const widthWide = 'wide';

const dropCapContent = 'This is the guide for all the different elements that we’re moving over to this new layout. Grouped by content type, we’ll start with text here. The intro paragraph is a little larger than the rest of the body copy and extends the full width. We’re hoping to treat all text links in the story in the same way we treat text links everywhere else, with <a href="#">this underline</a>.';

const dropCap = {
  content: dropCapContent,
  dropCap: includeDropCap,
  width: widthWide,
};

const noImageTitle = 'How Pickles Are Made: Refrigeration, Pasteurization, and Fermentation';
const noImageContent = 'After crunching our way through dozens and dozens of whole dill pickles, <a href="#">Boar’s Head Kosher Dill Pickles</a>—the sibling of our favorite dill pickle spears—emerged as the clear favorite. These refrigerated pickles were “firm” and had “great crunch.” Tasters also loved that they tasted lots of garlic and dill, “almost like a homemade pickle,” with balanced tanginess and no bold competing spices. For a refreshingly tangy, garlicky whole dill pickle, Boar’s Head is our top pick.';

const noImageDefaultWidth = {
  content: noImageContent,
  displayOption: 'default',
  dropCap: false,
  title: noImageTitle,
};

const noImageWideWidth = {
  ...noImageDefaultWidth,
  width: widthWide,
};

const floatPhoto = {
  altText: 'A chef is holding a pan with garlic bread on it.',
  photoUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_416,h_416/v1/AKO%20Articles/2021%20Articles/Reviews%20Team/GettyImages-680787007',
};
const floatCaption = 'No two jars of kosher pickles are exactly the same.';
const floatImageSupplementContent = '<p>When we reviewed dill pickle spears, all the shelf-stable products were soft and soggy, while the refrigerated pickles were crisp and crunchy. That’s because the heat applied to shelf-stable pickles during pasteurization essentially cooks them and can soften their texture. But with whole dill pickles, the differences between the refrigerated and shelf-stable products were more subtle. The refrigerated pickles once again had great crunch, but the shelf-stable options were only “a little less crisp.” We quickly came to understand why the lessons we learned about pickle spears didn’t hold true for whole pickles. First, the skin surrounding a whole pickle holds it together and keeps it crisp. Second, whole pickles tend to have more mass than spears and are therefore less affected by the heat of pasteurization and more likely to retain their crunch and snap.</p>';

const floatImageWithoutCaption = {
  ...noImageDefaultWidth,
  photo: {
    ...floatPhoto,
    photoDisplayOption: 'float',
  },
};

const floatImageWithCaption = {
  ...noImageDefaultWidth,
  photo: {
    ...floatPhoto,
    caption: floatCaption,
    photoDisplayOption: 'float',
  },
};

const floatImageSupplement = {
  content: floatImageSupplementContent,
  title: null,
};

const sidebarImageWithoutCaption = {
  ...floatImageWithoutCaption,
  photo: {
    ...floatImageWithoutCaption.photo,
    photoDisplayOption: 'sidebar',
  },
};

const sidebarImageWithCaption = {
  ...sidebarImageWithoutCaption,
  photo: {
    ...sidebarImageWithoutCaption.photo,
    caption: floatCaption,
  },
};

const sidebarCard = {
  altText: 'picture of a thing',
  description: 'We’ve happily made do with Weber’s basic kettle for years. But would newer, more tricked-out charcoal cookers be worth the upgrade?',
  title: 'FAQ About Storing Blue Cheese',
  type: 'Article',
  url: 'https://www.americastestkitchen.com/articles/3236-this-hardware-store-staple-deodorizes-your-fridge-better-than-baking-soda',
};

const sidebarCardWithoutImage = {
  ...noImageDefaultWidth,
  sidebarCard,
};

const sidebarCardWithImage = {
  ...sidebarCardWithoutImage,
  sidebarCard: {
    ...sidebarCard,
    photo: 'TnT/2020/1_CCJJ_Dill%20Pickles/SPS_Pickle_Samples_with_Brine_104-1',
  },
};

const boxContent = 'We tested a variety of bowl sizes, ranging from 10 to 20 ounces. The smaller bowls (10 to 12 ounces) were great for sides—potato salad—or even containing a messy pulled pork sandwich or a slice of ice cream cake. However, they were too small to hold a meal-size portion of chili or a salad containing bulky greens. We found that the 16- to 20-ounce bowls were too big for a small side, but they were perfect for larger portions of soup, stew, and salad. If you’re serving a variety of foods and want to buy only one model, we think that the larger sizes are more versatile.';
const boxTitle = 'Which Size Is Right for You?';

const boxNoImageDefaultWidth = {
  content: boxContent,
  displayOption: displayOptionBox,
  title: boxTitle,
};

const boxNoImageWideWidth = {
  ...boxNoImageDefaultWidth,
  width: widthWide,
};

const boxPhoto = {
  altText: 'A chef is holding a pan with garlic bread on it.',
  photoUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_632,h_100/v1/AKO%20Articles/2021%20Articles/Reviews%20Team/GettyImages-680787007',
};

const boxTopImageDefaultWidth = {
  ...boxNoImageDefaultWidth,
  photo: {
    ...boxPhoto,
    photoDisplayOption: 'top',
  },
};

const boxTopImageWideWidth = {
  ...boxTopImageDefaultWidth,
  width: widthWide,
};

const orderedList = '<ol><li>A quiet motor (a few sounded like jackhammers)</li><li>The Feed tube should be big enough to minimize pretrimming and waste, but narrow enough to hold food upright.</li><li>A heavy anchoring base that doesn’t need suction cups to stay stable</li><li>Buttons and controls that are easy to interpret, comfortable to push, and simple to wipe clean</li></ol>';

const boxWithOrderedListDefaultWidth = {
  ...boxNoImageDefaultWidth,
  content: orderedList,
};

const boxBottomImageDefaultWidth = {
  ...boxNoImageDefaultWidth,
  photo: {
    ...boxPhoto,
    photoDisplayOption: 'bottom',
  },
};

const boxBottomImageWideWidth = {
  ...boxBottomImageDefaultWidth,
  width: widthWide,
};

export default {
  dropCap,
  noImageDefaultWidth,
  noImageWideWidth,
  floatImageWithoutCaption,
  floatImageWithCaption,
  floatImageSupplement,
  sidebarImageWithoutCaption,
  sidebarImageWithCaption,
  sidebarCardWithoutImage,
  sidebarCardWithImage,
  boxNoImageDefaultWidth,
  boxNoImageWideWidth,
  boxWithOrderedListDefaultWidth,
  boxTopImageDefaultWidth,
  boxTopImageWideWidth,
  boxBottomImageDefaultWidth,
  boxBottomImageWideWidth,
};
