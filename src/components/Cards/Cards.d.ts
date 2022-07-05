export type BaseCardPropType = {
    className?: string,
    contentType: string,
    href: string,
    imageAlt?: string,
    imageUrl: string, // TODO: this is optional in the standardcard, but not everywhere else
    stickers?: StickerType[],
    onClick?(): void,
    siteKey: ThemeSiteKey,
    target?: string,
}

export type StickerContentType = 'collection' | 'clip' | 'episode' | 'playlist' | 'video' | 'cooking school course';

export type StickerType = {
  className?: string;
  contentType?: StickerContentType,
  icon?: boolean,
  type: string,
  text: string
};
