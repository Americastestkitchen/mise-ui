import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {
  color,
  font,
  fontSize,
  letterSpacing,
  spacing,
} from '../../../styles';

/* eslint-enable indent */
const HeroHatBody = styled.div.attrs({
  className: 'hero-hat__body',
})`
  background-color: ${color.athensGray};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: calc(100% - 2.8rem);
  padding: 1rem 2rem;
  width: 34.2rem;

  #article-page-hat-form-email,
  #article-page-hat-form-submit {
    height: ${spacing.xlg};
    max-height: ${spacing.xlg};
  }

  input {
    background-color: ${color.white};
    border-color: ${color.nobel};
    font: ${fontSize.md}/1 ${font.mwr};
    line-height: 4rem;
    padding: 0 1rem;
  }

  .registrant-submit {
    align-items: center;
    background-color: ${color.frog};
    display: flex;
    font: 700 (${fontSize.lg}/1 )${font.pnb};
    justify-content: center;
    letter-spacing: ${letterSpacing.cta};
    padding: 0;

    &:hover {
      background-color: ${color.darkFrog};
    }
  }

  .form-error__inline {
    top: 0.2rem;
  }

  .form-control {
    margin: 0;
  }

  .email-form__how {
    color: ${color.eclipse};
    font: ${fontSize.xsm}/1 ${font.pnr};
    letter-spacing: normal;
    margin-right: auto;
    padding-bottom: 0.2rem;
    text-decoration: none;
    width: fit-content;

    &:hover {
      background-color: transparent;
    }
  }

  input::placeholder {
    color: ${color.shadyLady};
    font: ${fontSize.md}/1 ${font.mwr};
    font-style: italic;
    line-height: ${spacing.xlg};
    padding: 0;
  }

  .email-form {
    max-width: 30.7rem;
  }

  .form-input {
    margin-bottom: 0;
  }

  .how-we-use__text {
    top: 2rem;
  }

  ${breakpoint('xs', 'md')`
    .dollarOffer-hat & {
      background-color: ${color.dawnPink};
      .email-form {
        button {
          padding: 0;
        }
      }
    }
    .thanksgiving-hat & {
      background-color: ${color.chablis};
    }
    .holiday-hat & {
      background-color: ${color.greenWhite};
    }
  `}

  ${breakpoint('md')`
    align-items: center;
    background-color: transparent;
    flex-direction: row;
    max-width: 77rem;
    padding: 0 5.6rem 0 7.6rem;
    width: 100%;

    .holiday-hat & {
      padding: 0 1.9rem 0 11rem
    }

    .dollarOffer-hat & {
      padding: 0 1.9rem 0 11rem
    }


    .form-control {
      display: flex;
      width: 100%;
    }

    .email-form {
      flex-direction: column;
      max-width: 100%;
      width: clamp(48%, 45rem, 100%);

      input {
        max-height: 4rem;
      }
    }

    .how-we-use__text {
      left: 0;
      top: 2rem;
    }
  `}

  ${breakpoint('lg')`
    max-width: 124rem;

    .email-form__form {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .holiday-hat & {
      padding: 0 10rem 0 12.5%;
    }

    .dollarOffer-hat & {
      padding: 0 10rem 0 12.5%;
      .email-form {
        button {
          max-width: 26.2rem;
          padding: 0 1rem;
        }
        svg {
          fill: ${color.white};
          height: 1rem;
          margin-left: 1rem;
          width: 1rem;
        }
      }
    }
  `}

  ${breakpoint('xlg')`
    justify-content: space-between;
    padding: 0 8.6rem;

    .email-form-wrapper {
      margin-bottom: 2rem;
    }

    .email-form {
      flex-direction: row;
      width: 45.2rem;

      button {
        max-width: 22.6rem;
        min-width: 22.6rem;
        padding: 0;
      }

      input {
        border-right-width: 0;
        max-width: 22.6rem;
      }
    }
    .dollarOffer-hat &  {
      padding: 0 7.6rem;
    }
    .thanksgiving-hat &  {
      padding: 0 7.6rem;
    }
    .holiday-hat & {
      padding: 0 7.6rem;
    }
  `}
`;

export default HeroHatBody;
