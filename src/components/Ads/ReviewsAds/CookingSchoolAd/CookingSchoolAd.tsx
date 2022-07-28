import React from 'react';
import styled, { css } from 'styled-components';

import { md, lg, xlg } from '../../../../styles/breakpoints';
import {
  color,
  font,
  fontSize,
  letterSpacing,
  spacing,
  withThemes,
} from '../../../../styles';
import { cssThemedAdBtnBackground, cssThemedColor } from '../../../../styles/mixins';
import { getImageUrl } from '../../../../lib/cloudinary';

const baseClass = 'cooking-school-ad';

const AdDimensions = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${md(css`
    align-items: center;
    flex-direction: row;
  `)}

  ${lg(css`
    &.${baseClass}__detail {
      justify-content: space-between;
    }
  `)}

  ${xlg(css`
    margin: auto;

    &.${baseClass}__detail {
      justify-content: unset;
    }

    &.${baseClass}__landing {
      width: 113.6rem;
    }
  `)}
`;

const AdPicture = styled.picture`
  margin-right: 1.1rem;
  max-width: 10.2rem;
  min-height: 10.2rem;
  min-width: 10.2rem;

  ${md(css`
    margin-right: 1.05rem;
    max-width: 10rem;
    min-height: 10rem;
    min-width: 10rem;
  `)}

  ${xlg(css`
    margin-right: 2.65rem;

    &.cooking-shcool-ad__detail {
      margin-right: 1rem;
    }
  `)}
`;

const AdWrapperTheme = {
  default: css`
    padding: 1.9rem 1.9rem ${spacing.md} 1.8rem;

    @media print {
      display: none;
    }

    &.${baseClass}__detail {
      margin: 3.2rem -1.6rem 2.2rem;
      width: calc(100% + 3.2rem);
    }

    &.${baseClass}__landing {
      margin-bottom: ${spacing.xlg};
      width: 100%;
    }

    ${md(css`
      align-items: center;
      flex-direction: row;
      padding: 2.2rem 3.6rem;
      text-align: left;

      &.${baseClass}__detail {
        margin: ${spacing.xlg} -3.6rem 0;
        width: calc(100% + 7.2rem);
      }

      &.${baseClass}__landing {
        margin-bottom: 3.4rem;
      }
    `)}

    ${xlg(css`
      &.${baseClass}__detail {
        margin: ${spacing.xlg} 0 0;
        max-height: 14.4rem;
        padding: 2.2rem 3.6rem;
        width: 84.8rem;
      }

      &.${baseClass}__landing {
        margin-bottom: 1.8rem;
      }
    `)}
  `,
  atk: css`
    background-color: ${color.solitude};
  `,
  cco: css`
    background-color: ${color.aliceBlue};
  `,
  cio: css`
    background-color: ${color.ivory};
  `,
};

const AdWrapper = styled.div`
 ${withThemes(AdWrapperTheme)}
`;

const ContentWrapperTheme = {
  default: css`
    display: flex;
    flex-direction: column;

    .review-ad-trial-em {
      letter-spacing: 0.84px;
    }

    ${lg(css`
      &.${baseClass}__detail {
        max-width: 26rem;
      }
    `)}

    ${xlg(css`
      max-width: 63.5rem;

      &.${baseClass}__detail {
        margin-right: 4.3rem;
        max-width: 41.9rem;
        min-width: 41.9rem;
      }
    `)}
  `,
  cio: css`
    ${xlg(css`
      &.${baseClass}__detail {
        margin-right: 2.4rem;
        max-width: 44.5rem;
        width: 44.5rem;
      }
    `)}
  `,
};

const ContentWrapper = styled.div`
  ${withThemes(ContentWrapperTheme)}
`;

const CtaLink = styled.div`
  align-items: center;
  color: ${color.white};
  display: flex;
  font: ${fontSize.lg}/1.2rem ${font.pnb};
  justify-content: center;
  letter-spacing: ${letterSpacing.cta};
  min-height: ${spacing.xlg};
  text-transform: uppercase;
  
  ${md(css`
    min-width: 19.7rem;
  `)}
  
  ${lg(css`
    min-width: 17.7rem;
    margin-left: 2.5rem;
  `)}

  ${xlg(css`
    margin-left: 0;
    margin-right: ${spacing.xlg};
    min-width: 19.7rem;    
  `)}

  ${cssThemedAdBtnBackground}
`;

const Description = styled.span`
  font: ${fontSize.lg} / 2.1rem ${font.pnb};
  letter-spacing: normal;

  ${md(css`
    font: 2.1rem / 2.4rem ${font.pnb};
  `)}

  ${xlg(css`
    font: 2.1rem / 2.6rem ${font.pnb};
  `)}

  ${cssThemedColor}
`;

const Headline = styled.span`
  font: ${fontSize.sm} / 1.6rem ${font.pnr};
  letter-spacing: 1.4px;
  margin-bottom: ${spacing.xsm};
  text-transform: uppercase;

  ${md(css`
    font: ${fontSize.md} / 2.6rem ${font.pnr};
    letter-spacing: ${letterSpacing.md};
    margin-bottom: ${spacing.xxsm};
    min-width: 31.7rem;
  `)}

  ${xlg(css`
    margin-top: ${spacing.xsm};
  `)}

  ${cssThemedColor}
`;

const MainContent = styled.div`
  display: flex;
  margin-bottom: ${spacing.md};

  ${md(css`
    margin-bottom: 0;
    margin-right: 4.6rem;
  `)}

  ${xlg(css`
    margin-right: 13rem;

    &.${baseClass}__detail {
      margin-right: 0;
    }
  `)}
`;
export type CookingSchoolAdProps = {
  cloudinaryId: string;
  description: string;
  deviceType: string;
  headline: string;
  href: string;
  identifier: 'detail' | 'landing';
  linkCta: string;
  mobileLinkCta: string;
  onClick: () => void;
}

const CookingSchoolAd = ({
  cloudinaryId = 'ATK Reviews Ads/CAN_CookingSchoolGeneralCandids-9031_3x.png',
  description = 'Take your skills to the next level with 320+ courses led by our expert test cooks.',
  deviceType,
  headline = 'Try our online cooking school',
  href,
  identifier,
  linkCta = 'Try for Free',
  mobileLinkCta = 'Try Now',
  onClick,
}: CookingSchoolAdProps) => {
  const classByLocation = `${baseClass}__${identifier}`;
  const linkText = deviceType === 'mobile' ? mobileLinkCta : linkCta;

  return (
    <AdWrapper className={`${classByLocation}`}>
      <AdDimensions
        className={`${classByLocation}`}
        href={href}
        onClick={onClick}
      >
        <MainContent className={`${classByLocation}`}>
          <AdPicture className={`${classByLocation}`}>
            <source
              src={getImageUrl(cloudinaryId, { aspectRatio: '1:1', width: 500 })}
              media="(min-width: 768)"
            />
            <img
              alt=""
              className={`${baseClass}__image`}
              crossOrigin="anonymous"
              decoding="async"
              src={getImageUrl(cloudinaryId, { aspectRatio: '1:1', width: 400 })}
            />
          </AdPicture>
          <ContentWrapper className={`${classByLocation}`}>
            <Headline>{headline}</Headline>
            <Description dangerouslySetInnerHTML={{ __html: description }} />
          </ContentWrapper>
        </MainContent>
        <CtaLink className={`${classByLocation}`}>{linkText}</CtaLink>
      </AdDimensions>
    </AdWrapper>
  );
};

export default CookingSchoolAd;
