import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color, font, fontSize, mixins } from '../../../styles';

const ContentWrapper = styled.div`
  max-width: 33.3rem;
  padding: 0 0.5rem 2.6rem 1rem;

  ${breakpoint('md')`
    max-width: 69.6rem;
    padding: 0.8rem 3.2rem 2.4rem 1.6rem;
  `}

  ${breakpoint('xlg')`
    max-width: 63.2rem;
    padding: 0.8rem 3rem 2.9rem 2.5rem;
  `}
`;

const ContentTextBlockP = styled.p`
  color: ${color.eclipse};
  font: ${fontSize.md}/2.4rem ${font.pnr};

  a {
    ${mixins.styledLink(color.turquoise, color.seaSalt)}
  }

  ul {
    list-style: none;
  }

  ul li::before {
    content: "\2022";
    color: ${color.mediumGray};
    margin-right: 0.9rem;
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
