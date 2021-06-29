import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color, font, fontSize, mixins } from '../../../styles';

const ContentWrapper = styled.div`
  margin-bottom: 3rem;
  max-width: 100%;
  padding: 0 0.4rem 2.6rem 1rem;

  ${breakpoint('md')`
    padding: 0.8rem 3.2rem 2.4rem 1.6rem;
  `}

  ${breakpoint('xlg')`
    padding: 0.8rem 3rem 3rem 2.4rem;
  `}
`;

const ContentTextBlockP = styled.p`
  color: ${color.eclipse};
  font: ${fontSize.md}/2.4rem ${font.pnr};

  ul {
    li {
      align-items: flex-start;
      margin-bottom: 1rem;
      padding-left: 1.2rem;
      position: relative;

      &:last-child {
        margin-bottom: 0;
      }

      &::before {
        border-radius: 4px;
        content: ' ';
        background-color: ${color.mediumGray};
        left: 0;
        margin: 0.8rem 0.8rem 0 0;
        min-height: 4px;
        min-width: 4px;
        position: absolute;
      }
    }
  }


  a {
    ${mixins.styledLink(color.turquoise, color.seaSalt)}
  }

`;

const FinePrintContent = ({ content }) => (
  <ContentWrapper>
    <ContentTextBlockP
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </ContentWrapper>
);

FinePrintContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default FinePrintContent;
