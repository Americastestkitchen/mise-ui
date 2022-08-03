export interface BaseCardPropType {
    className?: string;
    contentType: string;
    href: string;
    imageAlt?: string;
    stickers?: StickerType[];
    onClick?(): void;
    siteKey: ThemeSiteKey;
    target?: string;
}

export interface StandardFeatureSharedProps extends BaseCardPropType {
  avgRating?: number;
  ctaDataAttrs?: Record<string, unknown>;
  ctaText?: string;
  ctaUrl?: string;
  dataAttrs?: Record<string, unknown>;
  displayFavoritesButton?: boolean;
  imageUrl: string;
  isFavorited?: boolean;
  numRatings?: number;
  objectId: string;
  originalPrice?: string;
  siteKeyFavorites?: DomainSiteKey;
  title: string;
}

export type StickerContentType = 'collection' | 'clip' | 'episode' | 'playlist' | 'video' | 'cooking school course';

export type StickerType = {
  className?: string;
  contentType?: StickerContentType,
  icon?: boolean,
  type: string,
  text: string
};
