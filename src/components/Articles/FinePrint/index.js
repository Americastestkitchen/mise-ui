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
  max-width: 33.3rem;

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
      right: 3.2rem;
      top: 4.5rem;
    `}

    ${breakpoint('xlg')`
      left: 62.7rem;
    `}
  }

  .accordion-content-wrapper > button {
    width: 100%;
  }
`;

const FinePrint = ({
  content,
  icon,
  iconSize,
  id,
  isFieldset,
  isHidden,
  onClick,
  subtitle,
  title,
}) => (
  <FinePrintContainer>
    <Accordion
      icon={icon}
      iconSize={iconSize}
      id={id || 'fine-print__accordion'}
      isFieldset={isFieldset}
      isHidden={isHidden}
      label={<FinePrintLabel subtitle={subtitle} title={title} />}
      onClick={onClick}
    >
      <FinePrintContent content={content} />
    </Accordion>
  </FinePrintContainer>
);

FinePrint.propTypes = {
  /** Content for child - open on click */
  content: PropTypes.string.isRequired,
  /** Unique id string for svg icon to render next to label */
  icon: PropTypes.string,
  /* Size of icon */
  iconSize: PropTypes.oneOf(['default', 'large', 'extraLarge']),
  /** HTML attribute */
  id: PropTypes.string,
  /** For accessability we need a fieldset version of this component. */
  isFieldset: PropTypes.bool,
  /** Sets initial state of the hidden content. */
  isHidden: PropTypes.bool,
  /** for mixpanel purposes */
  onClick: PropTypes.func,
  /** Subtitle and Title for Label */
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

FinePrint.defaultProps = {
  icon: null,
  iconSize: 'default',
  id: null,
  isFieldset: false,
  isHidden: false,
  onClick: null,
};

export default FinePrint;
