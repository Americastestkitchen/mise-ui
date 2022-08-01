import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import ShowMoreLess from '../ShowMoreLess';
import breakpoints from '../../../styles/breakpoints';

describe('ShowMoreLess component should', () => {
  const renderComponent = () => {
    const Item = ({ number }) => <p>{`Item ${number}`}</p>;

    Item.propTypes = {
      number: PropTypes.number.isRequired,
    };

    return render(
      <ThemeProvider theme={{ breakpoints }}>
        <ShowMoreLess
          id="test-show-more-less"
          initialCount={3}
          items={[
            <Item key={1} number={1} />,
            <Item key={2} number={2} />,
            <Item key={3} number={3} />,
            <Item key={4} number={4} />,
            <Item key={5} number={5} />,
            <Item key={6} number={6} />,
          ]}
        />
      </ThemeProvider>,
    );
  };

  it('render \'+ Show More \' button when collapsed and hide elements', () => {
    renderComponent();
    expect(screen.getByRole('button')).toHaveTextContent('+ Show More');
    expect(screen.getByTestId('show-more-rest-items').hidden).toBe(true);
  });

  it('render \'- Show Less \' button when expanded and reveal hidden elements', () => {
    renderComponent();
    fireEvent.click(screen.getByText('+ Show More'));
    expect(screen.getByRole('button')).toHaveTextContent('- Show Less');
    expect(screen.getByTestId('show-more-rest-items').hidden).toBe(false);
  });
});
