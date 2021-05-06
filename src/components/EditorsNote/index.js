import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import PropTypes from 'prop-types';
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

const iconTypeMap = {
  alert: Icons.Alert,
  coming_soon: Icons.Lightbulb,
  generic: Icons.Bell,
  retention: Icons.Bell,
  retest: Icons.Bell,
  price_update: Icons.PriceUpdate,
};

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

    a {
      ${mixins.styledLink(color.turquoise, color.seaSalt)}
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
    &.note-retention {
      background-color: ${color.solitude};

      a {
        ${mixins.styledLink(color.riptide, color.oysterBay)};
      }
    }
  `,
  cco: css`
    &.note-retention {
      background-color: ${color.aliceBlue};
      color: ${color.black};

      a {
        ${mixins.styledLink(color.malibu, color.cornflower)};
      }
    }
  `,
  cio: css`
    &.note-retention {
      background-color: ${color.ivory};
      color: ${color.cork};

      a {
        ${mixins.styledLink(color.dijon, color.sand)};
      }
    }
  `,
};

const EditorNote = styled.section`
  ${withThemes(EditorNoteTheme)}
`;

const EditorNoteIconTheme = {
  default: css`
    align-items: center;
    background-color: ${color.cuttySark};
    border-radius: 50%;
    display: flex;
    height: 3rem;
    justify-content: center;
    left: 0;
    position: absolute;
    transform: translate(-50%, -50%);
    top: ${spacing.xlg};
    width: 3rem;

    .note-retention & {
      background-color: ${color.darkTeal};
    }

    ${breakpoint('xs', 'md')`
      top: 0;
      transform: translate(50%, -50%);
    `}

    ${breakpoint('md', 'xlg')`
      left: 5px;
    `}

    @media print {
      color: ${color.black};

      svg circle {
        fill: ${color.black};
      }
    }
  `,
  cco: css`
    ${breakpoint('md', 'xlg')`
      left: 0;
    `}

    .note-retention & {
      svg circle {
        fill: ${color.wedgewood};
      }
    }
  `,
  cio: css`
    .note-retention & {
      svg circle {
        fill: ${color.arrowTown};
      }
    }
  `,
};

const EditorNoteIcon = styled.span`
  ${withThemes(EditorNoteIconTheme)}
`;

const EditorNoteTitleTheme = {
  default: css`
    color: ${color.cuttySark};
    font: ${fontSize.lg}/${lineHeight.lg} ${font.pnb};
    margin-right: ${spacing.sm};

    .note-alert & {
      color: ${color.tabasco};
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
};

const EditorNoteText = styled.div`
  ${withThemes(EditorNoteTextTheme)}
`;

const EditorsNote = ({
  content,
  noteType,
  subtitle,
  title,
}) => {
  const Icon = iconTypeMap[noteType] || iconTypeMap.generic;
  return (
    <EditorNote className={`editors-note note-${noteType}`}>
      {Icon && (
        <EditorNoteIcon data-type={noteType}>
          <Icon />
        </EditorNoteIcon>
      )}
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
};

EditorsNote.propTypes = {
  content: PropTypes.string.isRequired,
  noteType: PropTypes.oneOf([
    'alert',
    'coming_soon',
    'generic',
    'retest',
    'price_update',
    'retention',
  ]),
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

EditorsNote.defaultProps = {
  noteType: null,
  subtitle: null,
  title: null,
};

export default EditorsNote;
