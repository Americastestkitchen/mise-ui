import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Accordion from '../../Accordion/Accordion';
import FinePrintContent from './FinePrintContent';
import FinePrintLabel from './FinePrintLabel';

import { color, mixins, withThemes } from '../../../styles';

const FinePrintContainerTheme = {
  default: css`
    background-color: ${color.white};
    margin-bottom: 3rem;
    max-width: 100%;

    ${breakpoint('xlg')`
      ${mixins.articlesWidth('default')};
    `}

    .accordion-item__button {
      position: relative;
      width: 100%;
    }
  `,
  cco: css`
    ${mixins.ccoReviewSetBorder()}
  `,
};

const FinePrintContainer = styled.div`
  ${withThemes(FinePrintContainerTheme)}
`;

const FinePrint = ({
  content,
  id,
  isHidden,
  onClick,
  subtitle,
  title,
}) => (
  <FinePrintContainer>
    <Accordion
      id={id || `fine-print__accordion--${title}`}
      iconSize="large"
      isHidden={isHidden}
      label={() => <FinePrintLabel subtitle={subtitle} title={title} />}
      onClick={onClick}
    >
      <FinePrintContent content={content} />
    </Accordion>
  </FinePrintContainer>
);

FinePrint.propTypes = {
  /** Content for child - open on click */
  content: PropTypes.string.isRequired,
  /** HTML attribute */
  id: PropTypes.string,
  /** Sets initial state of the hidden content. */
  isHidden: PropTypes.bool,
  /** for mixpanel purposes */
  onClick: PropTypes.func,
  /** Subtitle and Title for Label */
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

FinePrint.defaultProps = {
  id: null,
  isHidden: false,
  onClick: null,
};

export default FinePrint;
