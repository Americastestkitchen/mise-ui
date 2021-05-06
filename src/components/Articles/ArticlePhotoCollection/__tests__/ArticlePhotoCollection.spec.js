import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import ArticlePhotoCollection from '../index';
import breakpoints from '../../../../styles/breakpoints';
import images from '../imagesResponse';

describe('ArticlePhotoCollection component should', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <ArticlePhotoCollection
          {...props}
        />
      </ThemeProvider>,
    )
  );

  it('renders optional title', () => {
    renderComponent({ title: 'Testing title', count: 3, items: images, width: 'wide' });
    expect(screen.getByText('Testing title'));
  });

  it('renders optional caption', () => {
    renderComponent({ caption: 'testing caption', count: 3, items: images, width: 'wide' });
    expect(screen.getByText('testing caption'));
  });

  it('renders multiple images to size--two, default', () => {
    renderComponent({
      count: 2,
      items: images.slice(0, 2),
      width: 'default',
    });
    const renderedImages = document.getElementsByTagName('picture');
    expect(renderedImages[0].getAttribute('class') === 'photo-collection__default');
    expect(renderedImages.length === 2);
  });

  it('renders multiple images to size--three, wide', () => {
    renderComponent({
      count: 3,
      items: images,
      width: 'wide',
    });
    const renderedImages = document.getElementsByTagName('picture');
    expect(renderedImages[0].getAttribute('class') === 'photo-collection__wide');
    expect(renderedImages.length === 3);
  });
});
