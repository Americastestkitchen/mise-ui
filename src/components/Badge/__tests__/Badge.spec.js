import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import Badge from '../index';

describe('Badge', () => {
  const renderComponent = props => (
    render(
      <Badge
        {...props}
      />,
    )
  );

  it('renders an atk badge', () => {
    renderComponent({ type: 'atk' });
    expect(screen.getByTestId('atk-badge'));
  });

  it('renders an cio badge', () => {
    renderComponent({ type: 'cio' });
    expect(screen.getByTestId('cio-badge'));
  });

  it('renders an cco badge', () => {
    renderComponent({ type: 'cco' });
    expect(screen.getByTestId('cco-badge'));
  });

  it('renders an kids badge', () => {
    renderComponent({ type: 'kids' });
    expect(screen.getByTestId('kids-badge'));
  });

  it('renders an school badge', () => {
    renderComponent({ type: 'school' });
    expect(screen.getByTestId('school-badge'));
  });

  it('renders an shop badge', () => {
    renderComponent({ type: 'shop' });
    expect(screen.getByTestId('shop-badge'));
  });
});
