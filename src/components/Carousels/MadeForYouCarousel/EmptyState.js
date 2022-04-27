import React from 'react';
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { font } from '../../../styles';
import { Title, Header, Divider } from '../BaseCarousel/styled-elements';

const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #3d3d3d;
  font-family: ${font.pnr};
  margin: 30px 0 70px;

  > * {
    margin-bottom: 10px;
  }

  h3 {
    font-family: ${font.pnb};
    font-size: 22px;
    line-height: 1.18;
  }

  p {
    font-size: 16px;
    line-height: 1.63;
    margin-bottom: 0;
  }

  .hide-mobile {
    display: none;

    ${breakpoint('md')`
      display: block;
    `}
  }

`;

const EmptyState = ({ title }) => (
  <>
    <Header>
      <Title>{title}</Title>
    </Header>
    <Divider showDivider />
    <EmptyWrapper>
      <img
        src="https://res.cloudinary.com/hksqkdlah/image/upload/v1648753599/Favorites%20LP/made-for-you-empty-state.png"
        alt="made for you"
        height="148"
      />
      <h3>Let us curate collections for you! </h3>
      <p>
        Stay tuned for recommendations we&apos;ll have in mind for you <br className="hide-mobile" />—
        the more recipes you save, the more we&apos;ll suggest.
      </p>
    </EmptyWrapper>
  </>
);

EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
};

export default EmptyState;
