import React from 'react';

import styles from './editorialText.module.scss';

type EditorialTextProps = {
  className?: string;
  content: string;
};

const EditorialText: React.FC<EditorialTextProps> = ({
  className,
  content
}) => {
  return (
    <div
      className={`${styles["content"]} ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default EditorialText;