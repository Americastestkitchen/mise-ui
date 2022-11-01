import React from 'react';
import styles from './accordionControl.module.scss';
import cx from 'classnames';

export type AccordionControlProps = {
  isExpanded: boolean;
}


const AccordionControl = ({isExpanded}: AccordionControlProps) => {
  const classStyles = cx(
    styles.plusIcon,
    { [styles.toggleExpanded]: isExpanded },
  )
  return (
    <svg
      className={classStyles}
      data-testid="plus-svg"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height='4'
        x='0'
        y='13'
        rx='3'
        width='100%'
      />
      <rect
        height='100%'
        x='14'
        y='0'
        rx='3'
        width='4'
      />
    </svg>
  )};
 export default AccordionControl