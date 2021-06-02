import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Accordion from '../../Accordion';
import FinePrintContent from './FinePrintContent';
import FinePrintLabel from './FinePrintLabel';

import { color } from '../../../styles';

const FinePrintContainer = styled.div`
  background-color: ${color.white};
  max-width: 100%;

  ${breakpoint('md')`
    max-width: 69.6rem;
  `}

  ${breakpoint('xlg')`
    max-width: 63.2rem;
  `}

  .accordion-item__icon {
    border: 2px solid ${color.eclipse};
    border-radius: 50%;
    height: 3rem;
    max-height: 3rem;
    max-width: 3rem;
    position: absolute;
    right: 0.2rem;
    top: 5rem;
    width: 3rem;

    ${breakpoint('md')`
      right: 0;
      top: 4.5rem;
    `}

    ${breakpoint('xlg')`
      left: 60.2rem;
    `}
  }

  .accordion-content-wrapper > button {
    width: 100%;
    &:hover {
      .accordion-item__icon {
        ${breakpoint('xlg')`
          left: 59.5rem;
        `}
      }
    }
  }
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
