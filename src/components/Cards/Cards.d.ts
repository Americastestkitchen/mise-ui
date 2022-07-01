export type BaseCardPropType = {
    className?: string,
    contentType: string,
    href: string,
    imageAlt?: string,
    imageUrl: string, // TODO: this is optional in the standardcard, but not everywhere else
    stickers?: StickerType[], // TODO: what is this an array of?
    onClick?(): void,
    siteKey: ThemeSiteKey,
    target?: string,
}

export type StickerType = {
    className?: string;
    contentType?: string,
    icon?: boolean,
    type: string,
    text: string
};
