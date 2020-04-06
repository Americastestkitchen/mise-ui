import PropTypes from 'prop-types';
import React from 'react';
import ShowMoreLess from './index';

const Item = ({ number }) => <p>{`Item ${number}`}</p>;

Item.propTypes = {
  number: PropTypes.number.isRequired,
};

export const Default = () => (
  <ShowMoreLess
    initialCount="4"
    items={[
      <Item number="1" />,
      <Item number="2" />,
      <Item number="3" />,
      <Item number="4" />,
      <Item number="5" />,
      <Item number="6" />,
      <Item number="7" />,
      <Item number="8" />,
    ]}
  />
);

export default {
  title: 'Components|ShowMoreLess',
  component: ShowMoreLess,
};
