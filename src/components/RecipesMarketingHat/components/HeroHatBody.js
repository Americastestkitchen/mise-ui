import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {
  color,
  font,
  fontSize,
  letterSpacing,
  mixins,
  spacing,
} from '../../../styles';

/* eslint-enable indent */
const HeroHatBody = styled.div.attrs({
  className: 'hero-hat__body',
})`
  background-color: #e2eced;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: calc(100% - 2.6rem);
  padding: 1rem 2rem 2.5rem;
  width: 34.2rem;

  button.how-we-use__link {
    line-height: 1.2rem;
  }

  #article-page-hat-form-email,
  #article-page-hat-form-submit {
    height: ${spacing.xlg};
    max-height: ${spacing.xlg};
  }

  input {
    background-color: ${color.white};
    border-color: #707070;
    font: ${fontSize.md}/1 ${font.mwr};
    color: ${color.eclipse} !important;
    padding: 0 1rem;
  }

  .registrant-submit {
    align-items: center;
    background-color: ${color.frog} !important;
    display: flex;
    font: ${fontSize.lg}/2rem ${font.pnb} 700;
    justify-content: center;
    letter-spacing: ${letterSpacing.cta};

    &:hover {
      background-color: ${color.darkFrog} !important;
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
    line-height: 1.2rem;

    &:hover {
      background-color: transparent;
    }
  }

  input::placeholder {
    color: ${color.nobel};
    font: ${fontSize.md}/1 ${font.mwr};
    font-style: italic;
    line-height: ${spacing.xlg};
    padding: 0;
  }

  .email-form {
    max-width: 30.7rem;

    input {
      height: 4rem;
      line-height: 2rem;
      font-size: 1.7rem;
    }

    button {
      letter-spacing: 2.88px;
      line-height: 20px;
      padding: 0;

      &:hover {
        background-color: ${color.darkFrog} !important;
      }
    }
  }

  .form-input {
    margin-bottom: 0;
  }

  .how-we-use__text {
    top: 2rem;
  }

  input:focus {
    ${mixins.focusIndicator(color.eclipse, '-5px')}
  }

  button:focus {
    ${mixins.focusIndicator(color.white, '-3px')}
  }

  .how-we-use__link:focus {
    ${mixins.focusIndicator(color.eclipse, '0px')}
  }

  ${breakpoint('md')`
    align-items: center;
    background-color: transparent;
    flex-direction: row;
    max-width: 77rem;
    padding: 0 11rem;
    width: 100%;

    #article-page-hat-form-submit {
      max-width: 27.4rem;
    }

    .form-control {
      display: flex;
      width: 100%;
    }

    .registrant-submit {
      line-height: 1.9rem;
      max-width: 24.5rem;
    }

    .email-form {
      flex-direction: column;
      max-width: 27.4rem;
      width: 100%;

      button {
        width: 27.4rem;
        padding: 0;
        font-size: 1.7rem;
      }

      input {
        border: 1px solid #999999;
      }
    }

    .how-we-use__text {
      left: 0;
      line-height: 1.2rem;
    }
  `}

  ${breakpoint('lg')`
    max-width: 124rem;

    #article-page-hat-form-submit {
      max-width: 24.5rem;
    }

    .registrant-submit {
      line-height: 2rem;
    }

    .email-form__how {
      margin-right: 0;
      margin-left: auto;
    }

    .email-form {
      max-width: 100%;
      button {
        line-height: 20px;
        font-size: 1.8rem;
      }
    }

    .email-form__form {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .how-we-use__text {
      right: 0;
      left: auto;
    }
  `}

  ${breakpoint('xlg')`
    justify-content: space-between;
    padding: 0 9.8rem 0 7.6rem;

    .email-form {
      flex-direction: row;

      button {
        max-width: 24.5rem;
        padding: 0 15px;
      }

      input {
        border-right-width: 0;
        max-width: 22.6rem;
      }
    }
  `}

  &.is-tall {
    flex-direction: column;
    max-width: 100%;
    min-height: 2.8rem;
    padding: 1.8rem 2.8rem 2.4rem;
    width: 100%;

    .email-form {
      max-width: 31.2rem;
      margin: auto;

      &__how {
        margin-top: 0.3rem;
        width: 14rem;
      }

      button {
        line-height: 2rem;
      }

      input {
        border: 1px solid #707070;
        line-height: 2rem;
      }
    }

    ${breakpoint('md')`
      padding-top: 4.8rem;

      .email-form {
        flex-direction: row;
        justify-content: center;
        width: 50.5rem;
        max-width: 50.5rem;

        &__how {
          margin-right: 0;
          margin-left: auto;
        }

        button {
          max-width: 24.5rem;
        }

        input {
          max-width: 26rem;
        }
      }
    `}
  }
`;

export default HeroHatBody;
