import React from 'react';
import styled from 'styled-components';
import { font, onClickHashLink } from '../../styles';
import { cssThemedColor, cssThemedFont, cssThemedLink } from '../../styles/mixins';

const Title = styled.div`
  font-size: 26px;
  line-height: 30px;
  margin-bottom: 12px;
  ${cssThemedFont}
  ${cssThemedColor}
`;

const JumpLink = styled.a`
  font-family: ${font.mwr};
  font-size: 23px;
  line-height: 36px;
  ${cssThemedColor}
  ${cssThemedLink}
`;

export type TableOfContentsProps = { ids: string[] } & React.ComponentPropsWithoutRef<'button'>;

export default function TableOfContents({ ids, ...sectionProps }: TableOfContentsProps) {
  const truthyIds = ids.filter(Boolean);
  return truthyIds?.length > 0 ? (
    <section {...sectionProps}>
      <Title>Jump to a Section</Title>
      <ul>
        {truthyIds.map(id => (
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
