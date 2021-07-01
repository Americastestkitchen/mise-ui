import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import ImageListContainer from '../index';
import ImageListItem from '../../ImageListItem/index';
import breakpoints from '../../../../../styles/breakpoints';

const images = [{
  altText: 'picture of a thing',
  cloudinaryId: 'TnT/2020/1_CCJJ_Dill%20Pickles/SPS_Dill_Pickle_Hero_123',
  content: '\u003cp\u003eThere are many things about this picture to say. There are many things about this picture to say. There are many things about this picture to say.\u003cp\u003e',
  lazy: true,
  width: 'default',
}, {
  altText: 'picture of a thing',
  cloudinaryId: 'TnT/2020/1_CCJJ_Dill%20Pickles/SPS_Dill_Pickle_Hero_123',
  content: '\u003cp\u003eThere are many things about this picture to say. There are many things about this picture to say. There are many things about this picture to say.\u003cp\u003e',
  lazy: true,
  width: 'default',
}];

describe('ImageListContainer component should', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <ImageListContainer
          title="testing"
          width="default"
          {...props}
        />
      </ThemeProvider>,
    )
  );

  it('renders multiple images', () => {
    renderComponent({ children: images.map((el, i) => <ImageListItem key={i} {...el} />) });
    expect(screen.getAllByAltText('picture of a thing'));
  });

  it('renders a title', () => {
    renderComponent({ children: images.map((el, i) => <ImageListItem key={i} {...el} />) });
    expect(screen.getByText('testing'));
  });
});
