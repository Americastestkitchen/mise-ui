import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import RelatedSmallCard from '../index';
import { cards } from '../../../../styles';

describe('RelatedSmallCard should', () => {
  const renderComponent = () => (
    render(
      <RelatedSmallCard
        href="https://www.google.com"
        imageAlt="Image alt text"
        imageUrl="https://res.cloudinary.com/hksqkdlah/image/upload/t_media_lib_thumb/v1608319975/ATK%20TV%20Play%20Images/S21/ATK2103_REC_13_JULIA_05.jpg"
        title="Stir-Fried Ground Pork"
      />,
    )
  );

  it('render an image', () => {
    renderComponent();
    expect(screen.getByAltText('Image alt text'));
  });

  it('render a title', () => {
    renderComponent();
    expect(screen.getByText('Stir-Fried Ground Pork'));
  });

  // width and height are fixed for these cards
  it('have correct width and height', () => {
    renderComponent();
    const relatedSmallCard = screen.getByTestId('related-small-card');
    expect(relatedSmallCard).toHaveStyleRule(`width: ${cards.standard.width.lg}`);
    expect(relatedSmallCard).toHaveStyleRule('height: 7.6rem');
  });
});
