type SiteKey = 'atk' | 'cco' | 'cio' | 'kids' | 'play' | 'school' | 'shop'
const allowedSiteKeys = ['shop', 'school'];

const hasBrandBadge = (siteKey: SiteKey) => allowedSiteKeys.includes(siteKey);

export default hasBrandBadge;
