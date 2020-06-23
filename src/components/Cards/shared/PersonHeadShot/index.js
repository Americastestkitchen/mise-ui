import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PersonHeadShotWrapper = styled.div`
  border-radius: 10rem;
  height: 10rem;
  overflow: hidden;
  width: 10rem;
`;

const PersonHeadShotImg = styled.img`
  height: 100%;
  width: 100%;
`;

const PersonHeadShot = ({ imgAlt, imgSrc }) => (
  <PersonHeadShotWrapper data-testid="person-head-shot" className="person-head-shot">
    <PersonHeadShotImg
      alt={imgAlt}
      src={imgSrc}
    />
  </PersonHeadShotWrapper>
);

PersonHeadShot.propTypes = {
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
};


PersonHeadShot.defaultProps = {
  imgAlt: ' ',
};

export default PersonHeadShot;
