import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled, { css } from 'styled-components';
import {
  color,
  font,
  fontSize,
  letterSpacing,
  lineHeight,
  mixins,
  spacing,
  withThemes,
} from '../../styles';

import * as Icons from '../DesignTokens/Icon';
import { md } from '../../styles/breakpoints';

const EditorNoteTheme = {
  default: css`
    background-color: ${color.white};
    border: 3px solid ${color.cuttySark};
    color: ${color.eclipse};
    font: ${fontSize.lg} / ${lineHeight.lg} ${font.pnr};
    padding: ${spacing.md} 3.6rem;
    position: relative;

    div {
      margin-bottom: ${spacing.xxsm};
    }

    strong {
      font-weight: normal;
      font-family: ${font.pnb};
    }

    &.note-alert {
      border-color: ${color.rust};
    }

    &.note-retention {
      padding: ${spacing.md} ${spacing.sm};
    }

    &.note-retention {
      border: none;
    }

    ${breakpoint('xs', 'md')`
      padding: 1.8rem ${spacing.sm};

      div {
        span {
          display: block;
        }
      }
    `}

    ${breakpoint('md')`
      &.note-retention {
        padding: 1.4rem ${spacing.md} 1rem ${spacing.lg};
      }
    `}

    @media print {
      color: ${color.black};
      border-color: ${color.black};
      margin-top: 3rem;
      page-break-inside: avoid;
    }
  `,
  atk: css`
    a {
      ${mixins.styledLinkWithSiteKey('atk')}
    }

    &.note-retention {
      background-color: ${color.solitude};

      a {
        ${mixins.styledLink(color.riptide, color.oysterBay)};
      }
    }
  `,
  cco: css`
    border-color: ${color.denim};

    a {
      ${mixins.styledLinkWithSiteKey('cco')}
    }

    &.note-retention {
      background-color: ${color.aliceBlue};
      color: ${color.black};
    }
  `,
  cio: css`
    border-color: ${color.squirrel};

    a {
      ${mixins.styledLinkWithSiteKey('cio')}
    }

    &.note-retention {
      background-color: ${color.ivory};
      color: ${color.cork};
    }
  `,
};

const EditorNote = styled.section`
  ${withThemes(EditorNoteTheme)}
`;

const EditorNoteIconTheme = {
  cco: css`
    background-color: ${color.denim};

    svg circle {
      fill: ${color.denim};
    }

    ${breakpoint('md', 'xlg')`
      left: 0;
    `}

    .note-retention & {
      svg circle {
        fill: ${color.wedgewood};
      }
    }

    .note-alert & {
      svg circle {
        fill: ${color.rust};
      }
    }
  `,
  cio: css`
    background-color: ${color.squirrel};

    svg circle {
      fill: ${color.squirrel};
    }

    .note-retention & {
      svg circle {
        fill: ${color.arrowTown};
      }
    }

    .note-alert & {
      svg circle {
        fill: ${color.rust};
      }
    }
  `,
};

const cssEditorIconPositioning = css`
  position: absolute;
  top: -14px;
  left: 14px;
  ${md(css`
    top: min(calc(50% - 15px), 25px);
    left: -10px;
  `)}
`;

const EditorNoteIcon = styled.span`
  ${withThemes(EditorNoteIconTheme)}
  align-items: center;
  background-color: ${color.cuttySark};
  border-radius: 50%;
  display: flex;
  height: 3rem;
  width: 3rem;
  justify-content: center;
  ${cssEditorIconPositioning}
  
  @media print {
    color: ${color.black};

    svg circle {
      fill: ${color.black};
    }
  }

  .note-retention & {
    background-color: ${color.darkTeal};
  }
`;

const EditorNoteTitleTheme = {
  default: css`
    color: ${color.cuttySark};
    font: ${fontSize.lg}/${lineHeight.lg} ${font.pnb};
    margin-right: ${spacing.sm};

    .note-alert & {
      color: ${color.rust};
    }

    .note-retention & {
      color: ${color.eclipse};
    }

    @media print {
      color: ${color.black};

      .note-alert & {
        color: ${color.black};
      }
    }
  `,
  cco: css`
    color: ${color.denim};
  `,
  cio: css`
    color: ${color.cork};
  `,
};

const EditorNoteTitle = styled.span`
  ${withThemes(EditorNoteTitleTheme)}
`;

const EditorNoteSubtitleTheme = {
  default: css`
    font: ${fontSize.md}/${lineHeight.md} ${font.pnr};
    letter-spacing: ${letterSpacing.xlg};
    text-transform: uppercase;

    ${breakpoint('md')`
      font: ${fontSize.md}/${lineHeight.lg} ${font.pnr};
    `}
  `,
  atk: css`
    color: ${color.eclipse};
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
};

const EditorNoteSubtitle = styled.span`
  ${withThemes(EditorNoteSubtitleTheme)}
`;

const EditorNoteTextTheme = {
  default: css`
    font: ${fontSize.lg}/2.8rem ${font.pnr};

    .note-retention & {
      line-height: 2.6rem;
    }
  `,
  atk: css`
    color: ${color.eclipse};
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
};

const EditorNoteText = styled.div`
  ${withThemes(EditorNoteTextTheme)}
`;
export type NoteType = 'alert' | 'coming_soon' | 'generic' | 'retest' | 'price_update' | 'retention';

export type EditorsNoteProps = {
  content: string,
  noteType?: NoteType,
  subtitle?: string,
  title?: string,
}

const iconTypeMap = {
  alert: Icons.Alert,
  coming_soon: Icons.Lightbulb,
  generic: Icons.Bell,
  retention: Icons.Bell,
  retest: Icons.Bell,
  price_update: Icons.PriceUpdate,
};
const determineNoteType = (noteType: NoteType) => {
  const El = iconTypeMap[noteType] || iconTypeMap.generic;
  return El && (
  <EditorNoteIcon data-type={noteType}>
    <El />
  </EditorNoteIcon>
  );
};
export default function EditorsNote({
  content,
  noteType = 'generic',
  subtitle,
  title,
}: EditorsNoteProps) {
  return (
    <EditorNote className={`editors-note note-${noteType}`}>
      { noteType && determineNoteType(noteType) }
      {(title || subtitle) && (
        <div>
          {title && (
            <EditorNoteTitle>{title}</EditorNoteTitle>
          )}
          {subtitle && (
            <EditorNoteSubtitle>{subtitle}</EditorNoteSubtitle>
          )}
        </div>
      )}
      <EditorNoteText
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </EditorNote>
  );
}
