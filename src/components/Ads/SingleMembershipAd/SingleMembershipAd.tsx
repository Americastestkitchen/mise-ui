import React from 'react';
import styled, { css } from 'styled-components';
import { md, lg, xlg, mdToLg, lgToXlg } from '../../../styles/breakpoints';
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

const SingleMembershipWrapperTheme = {
  default: css`
    padding: ${spacing.xsm} ${spacing.sm};

    ${md(css`
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
    `)}

    ${lg(css`
      align-items: center;
      display: flex;
      padding: ${spacing.sm};
    `)}

    ${xlg(css`
      max-height: 13rem;
      padding: ${spacing.sm} 0;

      .membership-benefit {
        margin-top: -3.6rem;
      }
    `)}
  `,
  dark: css`
    background-color: ${color.asphalt};
  `,
};

const SingleMembershipWrapper = styled.article.attrs({
  className: 'single-membership-ad',
})`${withThemes(SingleMembershipWrapperTheme)}`;

const SingleMembershipInner = styled.div.attrs({
  className: 'single-membership-ad__inner',
})`
  ${lg(css`
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
  `)}

  ${lgToXlg(css`
      .membership-benefits-icons {
        flex: 0 1 54.3rem;
        margin: 0 auto 0 3rem;
      }
  `)}

  ${xlg(css`
      max-width: 160rem;

      .membership-benefits-icons {
        flex: 1 0 54.3rem;
        width: 54.3rem;
      }
  `)}
`;

const SingleMembershipContent = styled.div`
  .membership-benefits-icons {
    margin-bottom: ${spacing.sm};
  }

  ${mdToLg(css`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${spacing.xsm};
    max-width: 76.8rem;
  `)}

  ${lgToXlg(css`
    flex: 0 1 auto;
    max-width: 45%;
  `)}

  ${xlg(css`
    flex: 0 1 auto;
    padding-right: ${spacing.xsm};
    max-width: 60rem;
  `)}
`;

const SingleMembershipTitleTheme = {
  default: css`
    color: ${color.white};
    font: 2rem/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.xsm};

    ${mdToLg(css`
      flex: 0 0 40rem;
      width: 40rem;
    `)}

    ${lg(css`
      font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    `)}
  `,
  light: css`
    color: ${color.eclipse};
  `,
};

const SingleMembershipTitle = styled.h3.attrs({
  className: 'single-membership-ad__title',
})`${withThemes(SingleMembershipTitleTheme)}`;

const SingleMembershipCta = styled.a.attrs({
  className: 'single-membership-ad__cta',
})`
  background-color: ${color.frog};
  color: ${color.white};
  display: block;
  font: ${fontSize.lg}/4rem ${font.pnb};
  height: 4rem;
  letter-spacing: ${letterSpacing.cta};
  margin-bottom: ${spacing.sm};
  text-align: center;
  text-transform: uppercase;
  transition: 0.2s background-color ease-in-out;
  width: 100%;
  
  @media(hover: hover) {
    &:hover {
      background-color: ${color.darkFrog};
      cursor: pointer;
    }
  }

  ${lg(css`
    display: inline-block;
    margin-bottom: 0;
    padding: 0 ${spacing.md};
    width: auto;
  `)}
`;

export type SingleMembershipAdProps = {
  cta: string;
  ctaHref: string;
  onClick?: () => void;
  title?: () => HTMLElement | JSX.Element;
}

const SingleMembershipAd = ({
  cta,
  ctaHref,
  onClick,
  title,
}: SingleMembershipAdProps) => (
  <SingleMembershipWrapper>
    <SingleMembershipInner>
      <SingleMembershipContent>
        {title && (
        <SingleMembershipTitle>
          {title()}
        </SingleMembershipTitle>
        )}
        <SingleMembershipCta
          href={ctaHref}
          onClick={onClick}
          title={cta}
        >
          {cta}
        </SingleMembershipCta>
      </SingleMembershipContent>
      <MembershipBenefitIcons />
    </SingleMembershipInner>
  </SingleMembershipWrapper>
);

export default SingleMembershipAd;
