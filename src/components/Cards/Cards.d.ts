export type BaseCardPropType = {
    className?: string,
    contentType: string,
    href: string,
    imageAlt?: string,
    stickers?: StickerType[],
    onClick?(): void,
    siteKey: ThemeSiteKey,
    target?: string,
}

export type StickerContentType = 'collection' | 'clip' | 'episode' | 'playlist' | 'video' | 'cooking school course';

export type StickerType = {
  className?: string;
  contentType?: StickerContentType,
  icon?: 'collection' | 'video',
  type: 'editorial' | 'priority',
  text: string
};
