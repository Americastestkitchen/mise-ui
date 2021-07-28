import PropTypes from 'prop-types';
import React from 'react';
import ShowMoreLess from './index';

const Item = ({ number }) => <p>{`Item ${number}`}</p>;

Item.propTypes = {
  number: PropTypes.number.isRequired,
};

export const Default = () => (
  <ShowMoreLess
    id="something unique"
    initialCount={4}
    items={[
      <Item key={1} number={1} />,
      <Item key={2} number={2} />,
      <Item key={3} number={3} />,
      <Item key={4} number={4} />,
      <Item key={5} number={5} />,
      <Item key={6} number={6} />,
      <Item key={7} number={7} />,
      <Item key={8} number={8} />,
    ]}
  />
);

export default {
  title: 'Components/ShowMoreLess',
  component: ShowMoreLess,
};
