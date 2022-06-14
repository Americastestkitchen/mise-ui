export interface BaseCardPropType {
    className: string,
    contentType?: string,
    href: string,
    imageAlt: string,
    imageUrl: string,
    stickers: [], // TODO: what is this an array of?
    onClick(): void,
    siteKey: ThemeSiteKey,
    target: string,
}