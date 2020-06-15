import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PersonHeadShotWrapper = styled.div`
  height: 10rem;
  width: 10rem;
`;

const PersonHeadShotImg = styled.img`
  border-radius: 10rem;
  height: 10rem;
  width: 10rem;
`;

const PersonHeadShot = ({ imgAlt, imgSrc }) => (
  <PersonHeadShotWrapper className="person-head-shot">
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
