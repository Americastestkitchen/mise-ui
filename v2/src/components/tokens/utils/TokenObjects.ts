import { getTokenObject } from "./scripts/getTokenObject";

import breakpoints from "../../../styles/_tokens/_breakpoints.scss";
import colors from "../../../styles/_tokens/_colors.scss";
import contentContainer from "../../../styles/_tokens/_content-container.scss";
import grid from "../../../styles/_tokens/_grid.scss";
import spacing from "../../../styles/_tokens/_spacing.scss";
import typography from "../../../styles/_tokens/_typography.scss";
import zIndexes from "../../../styles/_tokens/_z-indexes.scss";

export const Breakpoints = getTokenObject('breakpoints', breakpoints);
export const Colors = getTokenObject('colors', colors);
export const ContentContainer = getTokenObject('contentContainer', contentContainer);
export const FontFamilies = getTokenObject('fontFamilies', typography);
export const Grid = getTokenObject('grid', grid);
export const ResetTypography = getTokenObject('resetTypography', typography);
export const SourceColors = getTokenObject('sourceColors', colors);
export const Spacing = getTokenObject('spacing', spacing);
export const SpacingUnit = spacing.spacingUnit;
export const Typography = getTokenObject('typography', typography);
export const ZIndexes = getTokenObject('zIndexes', zIndexes);