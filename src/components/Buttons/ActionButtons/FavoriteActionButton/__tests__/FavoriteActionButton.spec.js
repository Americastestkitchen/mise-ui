import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import FavoriteActionButton from '../FavoriteActionButton';

const saveToFavoritesButton = {
  isFavorited: true,
  onClick: null,
};

describe('FavoriteActionButton component', () => {
  const renderComponent = props => (
    render(
      <FavoriteActionButton {...props} />,
    )
  );

  it('render a favorite ribbon icon', () => {
    renderComponent(saveToFavoritesButton);
    expect(screen.getByTestId('favorite-ribbon-icon'));
  });

  it('render a folder icon', () => {
    renderComponent(saveToFavoritesButton);
    expect(screen.getByTestId('folder-icon'));
  });

  it('render a chevron icon', () => {
    renderComponent(saveToFavoritesButton);
    expect(screen.getByTestId('chevron-icon'));
  });

  it('render button text', () => {
    renderComponent(saveToFavoritesButton);
    expect(screen.getByTestId('saved'));
  });
});
