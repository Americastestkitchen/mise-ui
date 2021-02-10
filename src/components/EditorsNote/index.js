import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, font, fontSize, letterSpacing, lineHeight, spacing, withThemes } from '../../styles';

import * as Icons from '../DesignTokens/Icon';

const iconTypeMap = {
  alert: Icons.Alert,
  bell: Icons.Bell,
  lightbulb: Icons.Lightbulb,
  price: Icons.PriceUpdate,
};

const EditorNoteTheme = {
  default: css`
    background-color: ${color.white};
    border: 3px solid ${color.cuttySark};
    color: ${color.eclipse};
    font: ${fontSize.lg}/${lineHeight.lg} ${font.pnr};
    padding: ${spacing.md} 3.6rem;
    position: relative;

    div {
      margin-bottom: ${spacing.xxsm};
    }

    ${breakpoint('xs', 'md')`
      padding: 1.8rem ${spacing.sm};

      div {
        span {
          display: block;
        }
      }
    `}
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

    ${breakpoint('xs', 'md')`
      top: 0;
      transform: translate(25%, -50%);
    `}
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
  `,
};

const EditorNoteText = styled.p`
  ${withThemes(EditorNoteTextTheme)}
`;

const EditorsNote = ({
  subtitle,
  text,
  title,
  type,
}) => {
  const Icon = iconTypeMap[type];
  return (
    <EditorNote className={`note-${type}`}>
      {Icon && (
        <EditorNoteIcon data-type={type}>
          <Icon />
        </EditorNoteIcon>
      )}
      <div>
        <EditorNoteTitle>{title}</EditorNoteTitle>
        <EditorNoteSubtitle>{subtitle}</EditorNoteSubtitle>
      </div>
      <EditorNoteText>{text}</EditorNoteText>
    </EditorNote>
  );
};

EditorsNote.propTypes = {
  subtitle: PropTypes.string,
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.oneOf([
    'alert',
    'bell',
    'lightbulb',
    'price',
  ]),
};

EditorsNote.defaultProps = {
  subtitle: null,
  title: null,
  type: null,
};

export default EditorsNote;
