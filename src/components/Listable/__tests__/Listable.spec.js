import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import Listable from '../index';
import breakpoints from '../../../styles/breakpoints';
import { color } from '../../../styles';

describe('Listable component should', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <Listable
          {...props}
          cloudinaryId="mise-play/listable-story"
          duration="2:34"
          title="Introduction to Tomatoes 101"
        />
      </ThemeProvider>,
    )
  );

  it('render a title', () => {
    renderComponent({ hasAccess: true });
    expect(screen.getByText('Introduction to Tomatoes 101'));
  });

  it('render a VideoPlay SVG', () => {
    renderComponent({ hasAccess: true });
    expect(screen.getByTestId('video-play-svg'));
  });

  it('render a duration', () => {
    renderComponent({ hasAccess: true });
    expect(screen.getByText('2:34'));
  });

  it('render a lock without access', () => {
    renderComponent({ hasAccess: false });
    expect(screen.getByTestId('lock-svg'));
  });

  it('change background color when selected', () => {
    renderComponent({ hasAccess: true, isSelected: true });
    expect(screen.getByTestId('listable-body')).toHaveStyleRule(`background-color: ${color.eclipse};`);
  });
});
