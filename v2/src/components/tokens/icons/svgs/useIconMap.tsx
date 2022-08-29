import AlertIcon from './AlertIcon';
import BellIcon from './BellIcon';
import CheckmarkIcon from './CheckmarkIcon';
import CollectionIcon from './CollectionIcon';
import CommentIcon from './CommentIcon';
import CookbookIcon from './CookbookIcon';
import CookingPotIcon from './CookingPotIcon';
import FavoriteRibbonIcon from './FavoriteRibbon';
import FavoriteRibbonIconWithBg from './FavoriteRibbonWithBg';
import FilterIcon from './FilterIcon'
import FolderIcon from './FolderIcon';
import LightbulbIcon from './LightbulbIcon';
import LockIcon from './LockIcon';
import PhoneIcon from './PhoneIcon';
import PriceUpdateIcon from './PriceUpdateIcon';
import PrintIcon from './PrintIcon';
import QuoteIcon from './QuoteIcon';
import RecipeCardIcon from './RecipeCardIcon';
import ReviewRibbonIcon from './ReviewRibbonIcon';
import RoosterIcon from './RoosterIcon';
import ShoppingCartIcon from './ShoppingCartIcon';
import SpyglassIcon from './SpyglassIcon';
import TrendingIcon from './TrendingIcon';

export const iconMap = {
  alert: AlertIcon,
  bell: BellIcon,
  checkmark: CheckmarkIcon,
  collection: CollectionIcon,
  comment: CommentIcon,
  cookbook: CookbookIcon,
  cookingPot: CookingPotIcon,
  favoriteRibbon: FavoriteRibbonIcon,
  favoriteRibbonBg: FavoriteRibbonIconWithBg,
  filter: FilterIcon,
  folder: FolderIcon,
  lightbulb: LightbulbIcon,
  lock: LockIcon,
  phone: PhoneIcon,
  priceUpdate: PriceUpdateIcon, 
  print: PrintIcon,
  quote: QuoteIcon,
  recipeCard: RecipeCardIcon,
  reviewRibbon: ReviewRibbonIcon,
  rooster: RoosterIcon,
  shoppingCart: ShoppingCartIcon,
  spyglass: SpyglassIcon,
  trending: TrendingIcon,
};

export type IconType = keyof typeof iconMap;

const useIconMap = (type: IconType) => iconMap[type];

export default useIconMap;
