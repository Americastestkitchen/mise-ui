import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import PairedProductAd from '../index';
import breakpoints from '../../../../styles/breakpoints';

const defaultData = {
  title: 'Cook with Confidence',
  products: [
    {
      cloudinaryId: 'atk-20th-anniversary-tv-show-cookbook-header_u6komg',
      cta: 'START FREE TRIAL',
      ctaHref: 'https://www.americastestkitchen.com/foo',
      ctaTarget: '_blank',
      subtitle: 'DIGITAL ALL ACCESS',
      title: 'Every recipe, rating & video',
    },
    {
      cloudinaryId: 'atk-20th-anniversary-tv-show-cookbook-header_u6komg',
      cta: 'SAVE NOW',
      ctaHref: 'https://www.americastestkitchen.com/bar',
      ctaTarget: '_blank',
      subtitle: 'COOKBOOKS',
      title: 'Cook along with our TV Shows',
    },
  ],
};

describe('components', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider
        theme={{
          breakpoints,
          mode: 'dark',
        }}
      >
        <PairedProductAd
          {...defaultData}
        />
      </ThemeProvider>,
    )
  );

  it('renders two images', () => {
    renderComponent();
    expect(screen.getByTestId('paired-img-0'));
    expect(screen.getByTestId('paired-img-1'));
  });

  it('renders titles', () => {
    renderComponent();
    expect(screen.getByText('Every recipe, rating & video'));
    expect(screen.getByText('Cook along with our TV Shows'));
  });

  it('renders subtitles', () => {
    renderComponent();
    expect(screen.getByText('Every recipe, rating & video'));
    expect(screen.getByText('Cook along with our TV Shows'));
  });

  it('renders titles', () => {
    renderComponent();
    expect(screen.getByText('DIGITAL ALL ACCESS'));
    expect(screen.getByText('COOKBOOKS'));
  });

  it('renders cta links', () => {
    renderComponent();
    expect(screen.getByTitle('START FREE TRIAL'));
    expect(screen.getByTitle('SAVE NOW'));
  });
});
