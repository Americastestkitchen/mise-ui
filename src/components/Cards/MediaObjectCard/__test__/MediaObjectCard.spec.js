import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import MediaObjectCard from '../index';
import breakpoints from '../../../../styles/breakpoints';

describe('MediaObjectCard component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <MediaObjectCard
          ctaText="View full profile"
          ctaUrl="https://www.americastestkitchen.com"
          description="This is a test description."
          personHeadShot={{
            imgSrc: 'https://res.cloudinary.com/hksqkdlah/image/upload/v1591822137/mise-play/Image_21_3x.png',
          }}
          personName="Bridget Lancaster"
          personTitle="On-screen Instructor"
        />
      </ThemeProvider>,
    )
  );

  it('render a PersonHeadShot', () => {
    renderComponent();
    expect(screen.getByTestId('person-head-shot'));
  });

  it('render a name and title', () => {
    renderComponent();
    expect(screen.getByText('Bridget Lancaster'));
    expect(screen.getByText('On-screen Instructor'));
  });

  it('render a description', () => {
    renderComponent();
    expect(screen.getByText('This is a test description.'));
  });

  it('render a CTA', () => {
    renderComponent();
    expect(screen.getByText('View full profile'));
  });
});
