import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import type { ComponentMeta } from '@storybook/react';
import BylineList, { BylineListProps } from './BylineList';
import { defaultTheme, setBackground, setViewport, storybookParameters, wrapKnobs } from '../../config/shared.stories';
import { untilMd, md } from '../../styles/breakpoints';

export default {
  title: 'Components/BylineList',
  component: BylineList,
  ...storybookParameters,
} as ComponentMeta<typeof BylineList>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PreviewProps = { theme?: any, props?: Partial<BylineListProps> };

const authors: BylineListProps['authors'] = [
  {
    firstName: 'Sawyer',
    lastName: 'Phillips',
    bio: 'Savoie is an Assistant Digital Editor of ATK Reviews. She enjoys baking cakes, collecting records, and all things Toni Morrison.',
    photo: { publicId: 'v1/AKO%20Articles/Author_Headshots/staff_sawyer_phillips' },
  },
  {
    firstName: 'Miye',
    lastName: 'Bromberg',
    bio: 'Miye is a Senior Editor for ATK Reviews. She covers booze, blades, and gadgets of questionable value.',
    photo: { publicId: 'v1/AKO%20Articles/Author_Headshots/staff_miye_bromberg' },
  },
  {
    firstName: 'Miye',
    lastName: 'Bromberg',
    bio: 'Miye is a Senior Editor for ATK Reviews. She covers booze, blades, and gadgets of questionable value.',
    photo: { publicId: 'v1/AKO%20Articles/Author_Headshots/staff_miye_bromberg' },
  },
];

const defaultArgs: Partial<BylineListProps> = {
  attribution: 'Updated on Jun. 2020',
  authors: [],
};

const authorProp = {
  oneAuthor: { authors: [authors[0]] },
  oneAuthorNoPhoto: { authors: [authors.map(author => ({ ...author, photo: undefined }))[0]] },
  twoAuthors: { authors: [authors[0], authors[1]] },
  threeAuthors: { authors },
};

const Preview = ({ theme, props }: PreviewProps) => (
  <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
    <BylineList {...wrapKnobs({ ...defaultArgs, ...props })} />
  </ThemeProvider>
);

// Author Handling
export const NoAuthor = () => <Preview />;
export const OneAuthor = () => <Preview props={authorProp.oneAuthor} />;
export const OneAuthorNoPhoto = () => <Preview props={authorProp.oneAuthorNoPhoto} />;
export const TwoAuthor = () => <Preview props={authorProp.twoAuthors} />;
export const ThreeAuthors = () => <Preview props={authorProp.threeAuthors} />;

// Theming
export const CCOTheme = () => <Preview theme={{ siteKey: 'cco' }} props={authorProp.oneAuthor} />;
setBackground('cco', CCOTheme);
export const CIOTheme = () => <Preview theme={{ siteKey: 'cio' }} props={authorProp.oneAuthor} />;
setBackground('cio', CIOTheme);

// Viewport Styles
export const NoAuthorMobile = () => <Preview />;
export const OneAuthorMobile = () => <Preview props={authorProp.oneAuthor} />;
export const OneAuthorMobileNoPhoto = () => <Preview props={authorProp.oneAuthorNoPhoto} />;
export const ThreeAuthorsMobile = () => <Preview props={authorProp.threeAuthors} />;
setViewport('iphone5', NoAuthorMobile, OneAuthorMobile, OneAuthorMobileNoPhoto, ThreeAuthorsMobile);

const DesktopFlexLayout = styled.div<{width: number}>`
  width: ${props => props.width}px;
  margin: 16px;
  display: flex;

  ${untilMd(css`
    flex-direction: column;
  `)}

  ${md(css`
    flex-direction: row;
    justify-content: space-between;
  `)}
`;

const DetailActionMock = styled.div`
  height: 40px;
  width: 120px;
  background-color: gray;
`;

const DetailActionsWrapperMock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  ${DetailActionMock}:first-child {
    margin-right: 16px;
  }
`;

const DetailActionsMock = () => (
  <DetailActionsWrapperMock>
    <DetailActionMock />
    <DetailActionMock />
  </DetailActionsWrapperMock>
);

type Preview2Props = { width: number, props: Partial<BylineListProps> };
const Preview2 = ({ width, props }: Preview2Props) => (
  <ThemeProvider theme={{ ...defaultTheme }}>
    <DesktopFlexLayout width={width}>
      <BylineList {...wrapKnobs({ ...defaultArgs, ...props })} />
      <DetailActionsMock />
    </DesktopFlexLayout>
  </ThemeProvider>
);

// Self Alignment behavior
export const AlignPhoto = () => <Preview2 props={authorProp.oneAuthor} width={700} />;
export const AlignNoPhoto = () => (
  <Preview2 props={authorProp.oneAuthorNoPhoto} width={700} />
);
export const AlignPhotoWrap = () => <Preview2 props={authorProp.oneAuthor} width={500} />;
export const AlignNoPhotoWrap = () => (
  <Preview2 props={authorProp.oneAuthorNoPhoto} width={500} />
);
