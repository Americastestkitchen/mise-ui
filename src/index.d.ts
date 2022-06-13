/* eslint-disable @typescript-eslint/ban-types */
declare module 'styled-components-breakpoint' {
    import type { css, StyledProps } from 'styled-components';

    export type CSSFunction = (
        ...params: Parameters<typeof css>
    ) => <P extends object>({ theme }: StyledProps<P>) => ReturnType<typeof css>;

    type ThemeBreakpoint = 'xs' | 'sm' | 'smmd' | 'md' | 'lg' | 'xlg' | 'xxlg' | 'bylineList';

    export default function styledBreakpoint(
        gte: ThemeBreakpoint,
        lt?: ThemeBreakpoint
    ): CSSFunction;
}

interface Window {
    /**
     * undefined if `//www.instagram.com/embed.js` not or not yet loaded
     */
    instgrm?: { Embeds: { process: () => void } };
}

type DomainSiteKey = 'atk' | 'cio' | 'cco';