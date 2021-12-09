import React from 'react';
import styled from 'styled-components';
import { font, color, mixins, onClickHashLink } from '../../styles';
import { cssThemedColor, cssThemedUnderline } from '../../styles/mixins';

const Title = styled.div`
  font-family: ${font.mwr};
  font-size: 26px;
  line-height: 1.57;
  color: ${color.cork};
  margin-bottom: 4px;
`;

const JumpLink = styled.a`
  font-family: ${font.pnb};
  font-size: 23px;
  line-height: 1.57;
  color: ${color.cork};
  ${cssThemedColor}
  ${cssThemedUnderline}
  &:focus-within {
    ${mixins.focusIndicator()}
  }
`;

export type TableOfContentsProps = { ids: string[] } & React.ComponentPropsWithoutRef<'button'>;

export default function TableOfContents({ ids, ...sectionProps }: TableOfContentsProps) {
  return ids?.length > 0 ? (
    <section {...sectionProps}>
      <Title>Jump to a Section</Title>
      <ul>
        {ids.map(id => (
          <li key={id}>
            <JumpLink href={`#${id}`} onClick={onClickHashLink}>
              {id}
            </JumpLink>
          </li>
        ))}
      </ul>
    </section>
  ) : null;
}
