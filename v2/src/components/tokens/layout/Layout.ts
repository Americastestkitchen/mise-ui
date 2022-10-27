import layout from "../../../styles/_tokens/_layout.scss";
import { getTokenObject } from '../getTokenObject'

export const Breakpoints = getTokenObject('breakpoint', layout);
export const ZIndex = getTokenObject('zIndex', layout);
export const SpacingUnit = layout.spacingUnit;
export const Spacing = getTokenObject('spacing', layout);
export const ContentContainer = getTokenObject('contentContainer', layout);
export const Grid = getTokenObject('grid', layout);

