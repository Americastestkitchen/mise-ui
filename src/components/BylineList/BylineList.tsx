import React, { ReactElement, useState, useCallback } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import useResizeObserver from 'use-resize-observer/polyfilled';
import breakFunction from 'styled-components-breakpoint';
import { font, fontSize, spacing, color } from '../../styles';
import cloudinaryInstance, { baseImageConfig } from '../../lib/cloudinary';
import { cssThemedColor, cssThemedLink } from '../../styles/mixins';
import { BreakpointFn } from '../../styles/breakpoints';

export type Author = {
  id?: number;
  firstName: string;
  lastName: string;
  photo?: { publicId?: string };
  inactive?: boolean;
  bio?: string;
};

/**
 * Component breakpoint is settable and default to existing breakpoint used in components
 */
function useBreakpointTheme(breakpoint = 768) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useCallback((theme: any) => ({
    ...theme,
    breakpoints: {
      ...theme.breakpoints,
      bylineList: breakpoint,
    },
  }), [breakpoint]);
}

/** Stack author names and attribution in mobile. */
const cssStackedBreakpoint: BreakpointFn = interp => breakFunction('xs', 'bylineList')`${interp}`;

/** Inline author names and attribution in tablet and above. */
const cssInlineBreakpoint: BreakpointFn = interp => breakFunction('bylineList')`${interp}`;

/** cloudinary and image tag height & width number for avatar */
const avatarSideLength = 40;

/** Author's avatar component. */
const AuthorAvatarImage = styled.img`
  vertical-align: middle;
  border-radius: 100%;
  margin-right: ${spacing.xsm};
`;

const MiddleAlignment = styled.span`
  vertical-align: middle;
`;

/** List of authors full names. */
const AuthorList = styled.span`
  vertical-align: baseline;
  font-family: ${font.pnb};
  font-size: ${fontSize.md};
  line-height: 1.44;
  ${cssThemedColor}
`;

/** Attribution (i.e. Published on / Updated on) */
const Attribution = styled.span<{ atLeastOneAuthor: boolean }>`
  vertical-align: baseline;
  font-family: ${font.pnr};
  font-size: ${fontSize.md};
  line-height: 1.44;
  ${cssThemedColor}

  /* tablet and above is divided with | character. If no authors, don't show | character even on desktop. */
  ${props => props.atLeastOneAuthor
    && cssInlineBreakpoint(css`
    ${props => props.theme}
      &::before {
        content: " | ";
        margin: 0 4px;
      }
    `)}
`;

const Wrapper = styled.span<{ refHeight: number }>`
  ${props => cssInlineBreakpoint(css`
    margin-top: -2px;
    margin-bottom: ${spacing.sm};
    padding-right: 12px;
    align-self: ${props.refHeight < 40 ? 'center' : 'initial'};
  `)}

  /* tablet and above has attribution on its own line. */
  ${cssStackedBreakpoint(css`
    ${Attribution} {
      display: block;
      margin: ${spacing.xsm} 0;
    }
  `)}
`;

const Author = styled.span.attrs({ rel: 'author' })<{ underline?: boolean }>`
  font-family: inherit !important; // espresso
  ${props => props.underline && cssThemedLink}
`;

type OnClick = (id: number, name: string) => void;

type AuthorListInnerProps = {authors: Author[], onClick?: OnClick};

const AuthorListInner = ({ authors, onClick }: AuthorListInnerProps) => {
  const fullNames = authors.map(
    (author, idx) => {
      const authorId = author.id;
      if (!!onClick && !author?.inactive && authorId !== undefined) {
        return (
          <Author
            as="button"
            role="link"
            aria-label={`${author.firstName} ${author.lastName}: Go to author page`}
            key={author.id}
            underline
            onClick={() => onClick(authorId, `${author.firstName.toLowerCase()}-${author.lastName.toLowerCase()}`)}
          >
            {author.firstName} {author.lastName}
          </Author>
        );
      }
      return <Author key={author.id || idx}>{author.firstName} {author.lastName}</Author>;
    },
  );
  switch (fullNames.length) {
    case 0: return <></>;
    case 1: return <span>By {fullNames[0]}</span>;
    case 2: return <span>By {fullNames[0]} and {fullNames[1]}</span>;
    default: {
      const firstPart = fullNames.slice(0, -1).reduce((acc, item) => [...acc, item, ', '], [] as (string | JSX.Element)[]);
      return <span>By {firstPart}and {fullNames.slice(-1)}</span>;
    }
  }
};

export type BylineListProps = {
  className?: string;
  /** When defined, add link styles and sends id from author that is active */
  onClick?: OnClick;
  authors: Author[];
  attribution: string;
  breakpoint?: number;
}

/**
 * BylineList Component - replacement of Byline Component.
 * resize observer is for multiline requirements inside of a flexbox parent.
 */
const BylineList = ({
  className,
  onClick,
  authors,
  attribution,
  breakpoint,
}: BylineListProps): ReactElement => {
  const themeFn = useBreakpointTheme(breakpoint);
  const [imageError, setImageError] = useState(false);
  const { ref, height = null } = useResizeObserver();

  const authorImage = (() => {
    /** Design requirement to show image if there is exactly one author. */
    const onlyOneAuthor = authors.length === 1;
    const authorPublicId = authors[0]?.photo?.publicId;

    if (onlyOneAuthor && !!authorPublicId) {
      return cloudinaryInstance.url(authorPublicId, {
        ...baseImageConfig,
        width: avatarSideLength,
        height: avatarSideLength,
      });
    }

    return '';
  })();

  const atLeastOneAuthor = authors?.length > 0;

  return (
    <ThemeProvider theme={themeFn}>
      <Wrapper className={className} ref={ref} refHeight={height ?? 0}>
        {(authorImage && !imageError) && (
        <AuthorAvatarImage
          crossOrigin="anonymous"
          decoding="async"
          width={avatarSideLength}
          height={avatarSideLength}
          src={authorImage}
          onError={() => { setImageError(true); }}
        />
        )}
        <MiddleAlignment>
          <AuthorList>
            <AuthorListInner authors={authors} onClick={onClick} />
          </AuthorList>
          {attribution && (
          <Attribution atLeastOneAuthor={atLeastOneAuthor}>
            {attribution}
          </Attribution>
          )}
        </MiddleAlignment>
      </Wrapper>
    </ThemeProvider>
  );
};

export default BylineList;

/**
 * Light themed version of byline list for usage in cards with dark backgrounds.
 */
export const BylineListLight = styled(BylineList)`
  ${AuthorList}, ${Attribution} {
    color: ${color.white};
  }
`;

/**
 * Align self was implemented for self alignment with detail page actions.
 * In Article card we are in a different flex direction container so we
 *  are unsetting the property here.
 */
export const BylineListArticleCard = styled(BylineList)`
  margin-bottom: 0;
  align-self: unset;
`;
