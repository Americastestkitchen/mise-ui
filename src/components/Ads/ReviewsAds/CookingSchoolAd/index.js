import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {
  color,
  font,
  fontSize,
  letterSpacing,
  spacing,
} from '../../../../styles';
import { getImageUrl } from '../../../../lib/cloudinary';

const AdDimensions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${breakpoint('md')`
    align-items: center;
    flex-direction: row;
  `}

  ${breakpoint('xlg')`
    margin: auto;
    
    &.cooking-school-ad__landing {
      width: 113.6rem;
    }
  `}
`;

const AdPicture = styled.picture`
  margin-right: 1.1rem;
  min-height: 10.2rem;
  min-width: 10.2rem;

  ${breakpoint('md')`
    margin-right: 1.05rem;
    min-height: 10rem;
    min-width: 10rem;
  `}

  ${breakpoint('xlg')`
    margin-right: 2.65rem;

    &.cooking-school-ad__detail {
      margin-left: 2rem;
      margin-right: 1rem;
    }
  `}

`;

const AdWrapper = styled.div`
  background-color: ${color.solitude};
  padding: 1.9rem 1.9rem ${spacing.md} 1.8rem;

  &.cooking-school-ad__detail {
    margin: 3.2rem -1.6rem;
    margin-bottom: 2.2rem;
    width: calc(100% + 3.2rem);
  }

  &.cooking-school-ad__landing {
    margin-bottom: 4.1rem;
    width: 100%;
  }

  ${breakpoint('md')`
    align-items: center;
    flex-direction: row;
    padding: 2.2rem 3.6rem;
    text-align: left;
    
    &.cooking-school-ad__detail {
      margin: 4rem -3.6rem 0;
      width: calc(100% + 7.2rem);
    }

    &.cooking-school-ad__landing {
      margin-bottom: 3.4rem;
    }
  `}

  ${breakpoint('xlg')`
    &.cooking-school-ad__detail {
      margin: 4rem 0 0;
      max-height: 14.4rem;
      width: 84.8rem;
    }

    &.cooking-school-ad__landing {
      margin-bottom: 1.8rem;
    }
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoint('xlg')`
    max-width: 63.5rem;

    &.cooking-school-ad__detail {
      margin-right: 4.3rem;
      max-width: 41.9rem;
      min-width: 41.9rem;
    }
  `}
`;

const CtaLink = styled.a`
  align-items: center;
  background-color: ${color.coldPool};
  color: ${color.white};
  display: flex;
  font: ${fontSize.lg}/1.2rem ${font.pnb};
  justify-content: center;
  letter-spacing: ${letterSpacing.cta};
  min-height: ${spacing.xlg};
  text-transform: uppercase;

  &:hover {
    background-color: ${color.darkColdPool};
  }

  ${breakpoint('md')`
    min-width: 19.7rem;
  `}

  ${breakpoint('xlg')`
    margin-right: ${spacing.xlg};
  `}
`;

const Description = styled.span`
  color: ${color.eclipse};
  font: ${fontSize.lg}/2.1rem ${font.pnb};
  letter-spacing: normal;

  ${breakpoint('md')`
    font: 2.1rem/2.4rem ${font.pnb};
  `}

  ${breakpoint('xlg')`
    font: 2.1rem/2.6rem ${font.pnb};
  `}
`;

const Headline = styled.span`
  color: ${color.eclipse};
  font: ${fontSize.sm}/1.6rem ${font.pnr};
  letter-spacing: 1.4px;
  margin-bottom: ${spacing.xsm};
  text-transform: uppercase;

  ${breakpoint('md')`
    font: ${fontSize.md}/2.6rem ${font.pnr};
    letter-spacing: ${letterSpacing.md};
    margin-bottom: ${spacing.xxsm};
    min-width: 31.7rem;
  `}

  ${breakpoint('xlg')`
    margin-top: ${spacing.xsm};
  `}
`;

const MainContent = styled.div`
  display: flex;
  margin-bottom: ${spacing.md};

  ${breakpoint('md')`
    margin-bottom: 0;
    margin-right: 4.6rem;
  `}

  ${breakpoint('xlg')`
    margin-right: 13rem;

    &.cooking-school-ad__detail {
      margin-right: 0;
    }
  `}
`;

const CookingSchoolAd = ({
  linkCta,
  cloudinaryId,
  description,
  deviceType,
  headline,
  identifier,
  incode,
  mdc,
  mobileLinkCta,
  onClick,
}) => (
  <AdWrapper className={`cooking-school-ad__${identifier}`}>
    <AdDimensions className={`cooking-school-ad__${identifier}`}>
      <MainContent className={`cooking-school-ad__${identifier}`}>
        <AdPicture className={`cooking-school-ad__${identifier}`}>
          <source
            srcSet={getImageUrl(cloudinaryId, 'reviewsCookingSchoolAd', 100, 100)}
            media="(min-width: 768)"
          />
          <img
            alt=""
            className="cooking-school-ad__image"
            src={getImageUrl(cloudinaryId, 'reviewsCookingSchoolAd', 102, 102)}
          />
        </AdPicture>
        <ContentWrapper className={`cooking-school-ad__${identifier}`}>
          <Headline>{headline}</Headline>
          <Description>{description}</Description>
        </ContentWrapper>
      </MainContent>
      <CtaLink
        className={`cooking-school-ad__${identifier}`}
        href={`/order?mdc=${mdc}&incode=${incode}`}
        onClick={onClick}
      >
        {deviceType === 'mobile' ? mobileLinkCta : linkCta}
      </CtaLink>
    </AdDimensions>
  </AdWrapper>
);

CookingSchoolAd.propTypes = {
  cloudinaryId: PropTypes.string,
  description: PropTypes.string,
  deviceType: PropTypes.string.isRequired,
  headline: PropTypes.string,
  identifier: PropTypes.oneOf(['landing', 'detail']).isRequired,
  incode: PropTypes.string.isRequired,
  linkCta: PropTypes.string,
  mdc: PropTypes.string.isRequired,
  mobileLinkCta: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

CookingSchoolAd.defaultProps = {
  cloudinaryId: 'ATK Reviews Ads/CAN_CookingSchoolGeneralCandids-9031_3x.png',
  description: 'Take your skills to the next level with 320+ courses led by our expert test cooks.',
  headline: 'Try our online cooking school',
  linkCta: 'Try for Free',
  mobileLinkCta: 'Try Now',
};

export default CookingSchoolAd;
