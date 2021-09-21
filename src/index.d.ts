/* eslint-disable no-unused-vars */

/** quick blackbox typing for 'styled-components-breakpoint'  */
type ThemeBreakpoint = 'xs' | 'sm' | 'smmd' | 'md' | 'lg' | 'xlg';
declare module 'styled-components-breakpoint' {
    type StyledComponentsInterpolation =
        | ((
            /** TODO: should infer context from styled components */
            executionContext: Record<string, any>) => StyledComponentsInterpolation)
        | string
        | number
        | StyledComponentsInterpolation[];

    function templateFunction(
        strings: TemplateStringsArray,
        ...interpolations: StyledComponentsInterpolation[]): string;
    /** theme breakpoints defined in 'src/styles/breakpoints' */
    function styledBreakpoint(gte: ThemeBreakpoint, lt?: ThemeBreakpoint): typeof templateFunction;
    export default styledBreakpoint;
}

/** dry type placeholder */
declare const dry: any;

declare class Plyr {
  constructor(...args: any);
}
