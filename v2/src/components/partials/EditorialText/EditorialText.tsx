import React from 'react';
import cx from 'classnames';

import styles from './editorialText.module.scss';

type EditorialTextProps = {
  content: string;
  fontStyle?: 'accent' | 'primary';
};

const EditorialText = ({ content, fontStyle = 'primary' }: EditorialTextProps) => {
  const classNames = cx(
    'editorial-text',
    styles.wrapper,
    styles[fontStyle],
  );

  return (
    <div
      className={classNames}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default EditorialText;
