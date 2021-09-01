import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import ImageCollage from '../index';

const defaultProps = {
  imageAlt: 'kittens',
  imageUrl: [
    'https://placekitten.com/272/272',
    'https://placekitten.com/273/273',
    'https://placekitten.com/274/274',
    'https://placekitten.com/275/275',
    'https://placekitten.com/276/276',
  ],
  testId: 'kittens-thing',
};

describe('ImageCollage component should', () => {
  const renderComponent = (props = defaultProps) => (
    render(
      <ImageCollage
        {...props}
      />,
    )
  );

  it('render properly', () => {
    renderComponent();
    expect(screen.getByTestId('kittens-thing'));
  });

  it('renders no more than 4 images', () => {
    renderComponent();
    expect(screen.getByTestId('kittens-thing').children.length).toBe(4);
  });
});
