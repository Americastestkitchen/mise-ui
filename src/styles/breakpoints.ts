import { Interpolation, ThemedStyledProps } from 'styled-components';
import breakpoint, { CSSFunction } from 'styled-components-breakpoint';

const breakpoints = {
  xs: 0,
  sm: 374,
  smmd: 415, // iphone 6/8 Plus
  md: 768,
  lg: 1024,
  xlg: 1136,
};

export default breakpoints;

/**
 * Allows styled-components plugins to lint and highlight css interpolations.
 *
 * const Example = styled.div`
 *  ${untilSm(css`
 *    color: blue; // <- this will highlight, validate, and autocomplete with documentation.
 *  `)}
 * `;
 *
 * Pass typed properties from outside the css declaration to get a simple interpolation
 *  as the argument to the breakpoint functions.
 *
 * const Example = styled.div`
 *   ${props => md(css`
 *     margin-bottom: ${spacing.sm};
 *     align-self: ${props.refHeight < 40 ? 'center' : 'initial'};
 *   `)}
 * `;
 */
type BreakpointFn = <T>(
  // eslint-disable-next-line @typescript-eslint/ban-types
  interp: Interpolation<ThemedStyledProps<object, T>>
) => ReturnType<CSSFunction>

export const sm: BreakpointFn = interp => breakpoint('sm')`${interp}`;
export const md: BreakpointFn = interp => breakpoint('md')`${interp}`;
export const smmd: BreakpointFn = interp => breakpoint('smmd')`${interp}`;
export const lg: BreakpointFn = interp => breakpoint('lg')`${interp}`;
export const xlg: BreakpointFn = interp => breakpoint('xlg')`${interp}`;

export const untilSm: BreakpointFn = interp => breakpoint('xs', 'sm')`${interp}`;
export const untilMd: BreakpointFn = interp => breakpoint('xs', 'md')`${interp}`;
export const untilSmmd: BreakpointFn = interp => breakpoint('xs', 'smmd')`${interp}`;
export const untilLg: BreakpointFn = interp => breakpoint('xs', 'lg')`${interp}`;
export const untilXlg: BreakpointFn = interp => breakpoint('xs', 'xlg')`${interp}`;
