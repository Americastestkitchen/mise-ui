/* eslint-disable react/destructuring-assignment */
import React from 'react';
import type { ComponentMeta } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme, setBackground, setViewport, storybookParameters } from '../../config/shared.stories';
import TableOfContents, { TableOfContentsProps } from './TableOfContents';

export default {
  title: 'Components/TableOfContents',
  component: TableOfContents,
  ...storybookParameters,
} as ComponentMeta<typeof TableOfContents>;

const TemplateHeadings = styled.h2.attrs({ tabIndex: 0 })`
  margin: 128px 0;
`;

const Preview = (props: TableOfContentsProps, siteKey: DomainSiteKey) => (
  <ThemeProvider theme={{ ...defaultTheme, siteKey }}>
    <div>
      <TableOfContents {...props} />
      <div>
        {props.ids.map(id => <TemplateHeadings key={id} id={id}>{id}</TemplateHeadings>)}
      </div>
    </div>
  </ThemeProvider>
);

const args = {
  ids: ['First', 'Second', 'Third', 'Forth', 'Fifth', 'Sixth', 'Seventh', 'Eighth'],
};

const longArgs = {
  ids: [
    'First First First First First First First First First',
    'Second Second Second Second Second Second Second Second',
    'Third Third Third Third Third Third Third Third Third',
    'Forth',
    'Fifth Fifth Fifth Fifth Fifth Fifth Fifth',
    'Sixth',
    'Seventh',
    'Eighth',
  ],
};

// @ts-expect-error handle bad values
export const Hidden = () => Preview({ ids: ['', undefined, null] }, 'atk');

export const Atk = () => Preview(args, 'atk');

export const Cco = () => Preview(longArgs, 'cco');
setBackground('cco', Cco);

export const Cio = () => Preview(args, 'cio');
setBackground('cio', Cio);

export const Mobile = () => Preview(longArgs, 'atk');
setViewport('iphone5', Mobile);
