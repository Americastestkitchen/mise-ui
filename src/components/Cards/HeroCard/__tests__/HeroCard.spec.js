import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import HeroCard from '../index';
import breakpoints from '../../../../styles/breakpoints';

describe('HeroCard component should', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <HeroCard {...props} />
      </ThemeProvider>,
    )
  );

  const watchCardProps = {
    backgroundCloudinaryId: 'mise-play/Image_3x.png',
    description: 'Test watch description.',
    ctaUrl: 'www.americastestkitchen.com',
    ctaText: 'Watch The Latest Episode',
    iconKey: 'atk',
  };

  const learnCardProps = {
    backgroundCloudinaryId: 'mise-play/Image_3x.png',
    description: 'Test learn description.',
    ctaUrl: 'www.americastestkitchen.com',
    ctaText: 'Start Learning',
    personHeadShot: {
      imgAlt: 'test-alt-text',
      imgCloudinaryId: 'mise-play/Image_21_3x.png',
    },
    sticker: {
      contentType: 'video',
      text: '4 videos',
      type: 'editorial',
    },
  };

  it('render a description', () => {
    renderComponent(watchCardProps);
    renderComponent(learnCardProps);
    expect(screen.getByText('Test watch description.'));
    expect(screen.getByText('Test learn description.'));
  });

  it('render a CTA', () => {
    renderComponent(watchCardProps);
    renderComponent(learnCardProps);
    expect(screen.getByText('Watch The Latest Episode'));
    expect(screen.getByText('Start Learning'));
  });

  it('render a VideoPlay icon', () => {
    renderComponent(watchCardProps);
    renderComponent(learnCardProps);
    expect(screen.getAllByTestId('video-play-svg').length).toBe(2);
  });

  it('render a Logo when an iconKey prop is provided', () => {
    renderComponent(watchCardProps);
    expect(screen.getByTestId('atk-logo-svg'));
  });

  it('render a PersonHeadShot when personHeadShot prop is provided', () => {
    renderComponent(learnCardProps);
    expect(screen.getByAltText('test-alt-text'));
  });

  it('render a Sticker when sticker prop is provided', () => {
    renderComponent(learnCardProps);
    expect(screen.getByText('4 videos'));
  });
});
