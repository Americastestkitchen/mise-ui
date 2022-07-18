import React from 'react';
import styled from 'styled-components';
import { color, font, mixins } from '../../../styles';
import { cssThemedColor, cssThemedFontAccentColor } from '../../../styles/mixins';

const Wrapper = styled.div`
  margin: 16px 0;
`;

const Title = styled.div`
  font-family: ${font.mwr};
  font-size: 14px;
  ${cssThemedColor}
  margin: 16px 0;
`;

const List = styled.ul`
  margin-left: 8px;
`;

const ListItem = styled.li`
  line-height: 2;
  
  &::before {
    vertical-align: middle;
    /* background-color: ${color.black}; */
    content: '·';
    font-size: 48px;
    line-height: 0px;
    /* display: inline-block;
    height: 4px;
    width: 4px;
    border-radius: 100%; */
    margin-right: 4px;
  }
  & > * {
    vertical-align: middle;
  }
`;

const Anchor = styled.a`
  font-size: 14px;
  font-family: ${font.mwr};
  ${cssThemedFontAccentColor}
  &:focus, &:active {
    ${mixins.focusIndicator()};
  }
`;

type LinkItem = { id: number; href: string; text: string };
export type LinkFarmProps = { title: string; links: LinkItem[]; };

export default function LinkFarm({ title, links }: LinkFarmProps) {
  return (
    <Wrapper>
      <Title as="h3">{title}</Title>
      <List>
        {links.map(link => (
          <ListItem>
            <Anchor href={link.href}>
              {link.text}
            </Anchor>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}
