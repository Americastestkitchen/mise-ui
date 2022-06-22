import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import ActionIconButton from '../ActionIconButton';

const printActionButton = {
  iconType: 'print',
  onClick: null,
  text: 'Print recipes',
};

describe('ActionIconButton component', () => {
  const renderComponent = props => (
    render(
      <ActionIconButton {...props} />,
    )
  );

  it('render an icon', () => {
    renderComponent(printActionButton);
    expect(screen.getByTestId('print-icon'));
  });

  it('render button text', () => {
    renderComponent(printActionButton);
    expect(screen.getByText('Print recipes'));
  });
});
