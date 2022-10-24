import layout from "../../../styles/_tokens/_layout.scss";
import { getTokenObject } from '../utils' 

export const Breakpoints = getTokenObject('breakpoint', layout);
export const SpacingUnit = layout.spacingUnit;
export const Spacing = getTokenObject('spacing', layout);
export const Content = getTokenObject('content', layout);
export const Grid = getTokenObject('grid', layout);

