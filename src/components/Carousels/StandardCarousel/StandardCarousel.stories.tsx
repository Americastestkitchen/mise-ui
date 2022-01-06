import React, { PropsWithChildren } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { PhotoCard } from './PhotoCard';
import { defaultTheme, setBackground, storybookParameters } from '../../../config/shared.stories';
import StandardCarousel, { useCarouselContext } from './StandardCarousel';
import { PhotoCardProps } from '.';

export default {
  title: 'Components/Carousels/StandardCarousel',
  component: StandardCarousel,
  ...storybookParameters,
};

const PreviewProvider = ({ children, siteKey }: PropsWithChildren<{siteKey: 'atk' | 'cio' | 'cco'}>) => (
  <ThemeProvider theme={{ ...defaultTheme, siteKey }}>
    {children}
  </ThemeProvider>
);

const Box = styled.a.attrs({ href: '#' })`
  width: 300px;
  height: 400px;
  margin-right: 16px;
  background: red;

  :focus {
    background: blue;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Slide = ({ children }: any) => {
  const { onFocus } = useCarouselContext();
  return <Box onFocus={onFocus}>{children}</Box>;
};

export const ATK = () => (
  <PreviewProvider siteKey="atk">
    <StandardCarousel title="The Latest &amp; Best from Our Brands The Latest &amp; Best from Our Brands" showDivider>
      {['a', 'b', 'c', 'd'].map(alphabet => (
        <Slide key={alphabet}>{alphabet}</Slide>
      ))}
    </StandardCarousel>
  </PreviewProvider>
);

export const CCO = () => (
  <PreviewProvider siteKey="cco">
    <StandardCarousel title="The Latest &amp; Best from Our Brands The Latest &amp; Best from Our Brands" showDivider>
      {['a', 'b', 'c', 'd'].map(alphabet => <Slide key={alphabet}>{alphabet}</Slide>)}
    </StandardCarousel>
  </PreviewProvider>
);
setBackground('cco', CCO);

export const CIO = () => (
  <PreviewProvider siteKey="cio">
    <StandardCarousel title="The Latest &amp; Best from Our Brands The Latest &amp; Best from Our Brands" showDivider>
      {['a', 'b', 'c', 'd'].map(alphabet => <Slide key={alphabet}>{alphabet}</Slide>)}
    </StandardCarousel>
  </PreviewProvider>
);
setBackground('cio', CIO);

const items: PhotoCardProps[] = [
  {
    id: '2124_cvr-sfs-juicy-pub-burger-clr-020-article',
    img: { cloudinaryId: '2124_cvr-sfs-juicy-pub-burger-clr-020-article' },
    description: 'Once you have your digital thermometer, remember 125 degrees Fahrenheit is medium-rare, 135 is medium.',
  },
  {
    id: 'v1592840035/mise-play/feature-card-wide.jpg',
    img: { cloudinaryId: 'v1592840035/mise-play/feature-card-wide.jpg' },
    description: 'Once you have your digital thermometer, remember 125 degrees Fahrenheit is medium-rare, 135 is medium.',
  },
  {
    id: '43350-sfs-spaghetti-aglio-e-olio-68',
    img: { src: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_3:2,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_400/43350-sfs-spaghetti-aglio-e-olio-68' },
    description: 'Once you have your digital thermometer, remember 125 degrees Fahrenheit is medium-rare, 135 is medium.',
  },
];

export const PhotoCarouselExample = () => (
  <PreviewProvider siteKey="atk">
    <StandardCarousel title="The Latest &amp; Best from Our Brands The Latest &amp; Best from Our Brands">
      {items.map(item => (
        <div key={item.id} style={{ width: '100%', marginRight: '16px' }}>
          <PhotoCard {...item} />
        </div>
      ),
      )}
    </StandardCarousel>
  </PreviewProvider>
);
