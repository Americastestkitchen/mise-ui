import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { color, font, fontSize, mixins, withThemes } from '../../../styles';

const ContentWrapperTheme = {
  default: css`
    font: ${fontSize.md}/2.4rem ${font.pnr};
    margin-bottom: 3rem;
    max-width: 100%;
    padding: 0 0.4rem 2.6rem 1rem;

    ${breakpoint('md')`
      padding: 0.8rem 3.2rem 2.4rem 1.6rem;
    `}

    ${breakpoint('xlg')`
      padding: 0.8rem 3rem 3rem 2.4rem;
    `}

    ${mixins.articlesBoxLists()}
  `,
  atk: css`
    color: ${color.eclipse};
    ${mixins.articlesBoxLists('atk')}

    a {
      ${mixins.styledLink(color.turquoise, color.seaSalt)}
    }
  `,
  cco: css`
    color: ${color.black};
    ${mixins.articlesBoxLists('cco')}

    a {
      ${mixins.styledLink(color.malibu, color.cornflower)}
    }
  `,
  cio: css`
    color: ${color.cork};
    ${mixins.articlesBoxLists('cio')}

    a {
      ${mixins.styledLink(color.dijon, color.sand)}
    }
  `,
};

const ContentWrapper = styled.div`
  ${withThemes(ContentWrapperTheme)}
`;

const FinePrintContent = ({ content }) => (
  <ContentWrapper dangerouslySetInnerHTML={{ __html: content }} />
);

FinePrintContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default FinePrintContent;
