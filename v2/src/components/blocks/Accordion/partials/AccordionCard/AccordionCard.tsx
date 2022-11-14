import React, { useState } from 'react';
import styles from './accordionCard.module.scss';
import AccordionControl from '../AccordionControl/AccordionControl'
import EditorialText from '../../../../partials/EditorialText/EditorialText'
import cx from 'classnames';

export type AccordionCardProps = {
  label: string;
  content: string;
}

const AccordionCard = ({label, content}: AccordionCardProps) => {
  const [hidden, toggleHidden] = useState(true);
  const classStyles = cx(
    styles.content,
    { [styles.toggleVisible]: hidden },
  )
  return (
    <li className={styles.contentWrapper}>
      <button 
      className={styles.itemButton}
      onClick={() => {
        toggleHidden(curr => !curr);
      }}>
        <p className={styles.label}>{label}</p>
        <div 
          className={styles.actionIcon}
          >
          <AccordionControl isExpanded={!hidden} />
        </div>
      </button>
      <div className={classStyles}>
        <EditorialText content={content} />
      </div>
    </li>
  )
}

export default AccordionCard