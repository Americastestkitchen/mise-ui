import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import MembershipBenefitIcons from '../components/MembershipBenefitsIcons';
import {
  color,
  font,
  fontSize,
  letterSpacing,
  lineHeight,
  spacing,
  withThemes,
} from '../../../styles';

const SingleMembershipTheme = {
  default: css`
    padding: ${spacing.xsm} ${spacing.sm};

    ${breakpoint('md')`
      padding: ${spacing.xsm} 2rem ${spacing.sm};

      .membership-benefit {
        max-width: 8.2rem;

        p {
          max-width: 7rem;
        }

        > div {
          height: 8.2rem;
          width: 8.2rem;
        }

        svg {
          height: 5.2rem;
          width: 5.2rem;
        }
      }
    `}

    ${breakpoint('lg')`
      align-items: center;
      display: flex;
      padding: ${spacing.sm};
    `}

    ${breakpoint('xlg')`
      max-height: 13rem;
      padding: ${spacing.sm} 0;

      .membership-benefit {
        margin-top: -3.6rem;
      }
    `}
  `,
  dark: css`
    background-color: ${color.asphalt};
  `,
};

const SingleMembership = styled.article.attrs({
  className: 'single-membership-ad',
})`${withThemes(SingleMembershipTheme)}`;

const SingleMembershipInnerTheme = {
  default: css`
    ${breakpoint('lg')`
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
    `}

    ${breakpoint('lg', 'xlg')`
      .membership-benefits-icons {
        flex: 0 1 54.3rem;
        margin: 0 auto 0 3rem;
      }
    `}

    ${breakpoint('xlg')`
      max-width: 160rem;

      .membership-benefits-icons {
        flex: 1 0 54.3rem;
        width: 54.3rem;
      }
    `}
  `,
};

const SingleMembershipInner = styled.div.attrs({
  className: 'single-membership-ad__inner',
})`${withThemes(SingleMembershipInnerTheme)}`;

const SingleMembershipContent = styled.div`
  .membership-benefits-icons {
    margin-bottom: ${spacing.sm};
  }

  ${breakpoint('md', 'lg')`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${spacing.xsm};
    max-width: 76.8rem;
  `}

  ${breakpoint('lg', 'xlg')`
    flex: 0 1 auto;
    max-width: 45%;
  `}

  ${breakpoint('xlg')`
    flex: 0 1 auto;
    padding-right: ${spacing.xsm};
    max-width: 60rem;
  `}
`;

const SingleMembershipTitleTheme = {
  default: css`
    color: ${color.white};
    font: 2rem/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.xsm};

    ${breakpoint('md', 'lg')`
      flex: 0 0 40rem;
      width: 40rem;
    `}

    ${breakpoint('lg')`
      font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    `}
  `,
};

const SingleMembershipTitle = styled.h3.attrs({
  className: 'single-membership-ad__title',
})`${withThemes(SingleMembershipTitleTheme)}`;

const SingleMembershipCtaTheme = {
  default: css`
    background-color: ${color.wasabi};
    color: ${color.white};
    display: block;
    font: ${fontSize.lg}/4rem ${font.pnb};
    height: 4rem;
    letter-spacing: ${letterSpacing.cta};
    margin-bottom: ${spacing.sm};
    text-align: center;
    text-transform: uppercase;
    width: 100%;

    @media(hover: hover) {
      &:hover {
        background-color: ${color.olive};
      }
    }

    ${breakpoint('lg')`
      display: inline-block;
      margin-bottom: 0;
      padding: 0 ${spacing.md};
      width: auto;
    `}
  `,
};

const SingleMembershipCta = styled.a.attrs({
  className: 'single-membership-ad__cta',
})`${withThemes(SingleMembershipCtaTheme)}`;

const SingleMembershipAd = ({
  cta,
  ctaHref,
  title,
}) => (
  <SingleMembership>
    <SingleMembershipInner>
      <SingleMembershipContent>
        <SingleMembershipTitle>
          {title()}
        </SingleMembershipTitle>
        <SingleMembershipCta
          href={ctaHref}
          title={cta}
        >
          {cta}
        </SingleMembershipCta>
      </SingleMembershipContent>
      <MembershipBenefitIcons />
    </SingleMembershipInner>
  </SingleMembership>
);

SingleMembershipAd.propTypes = {
  cta: PropTypes.string.isRequired,
  ctaHref: PropTypes.string.isRequired,
  title: PropTypes.func.isRequired,
};

export default SingleMembershipAd;
