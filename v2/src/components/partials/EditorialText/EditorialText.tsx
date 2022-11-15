import classNames from "classnames/bind";

import styles from './editorialText.module.scss';

const cx = classNames.bind(styles);

type EditorialTextProps = {
  className?: string;
  content: string;
  theme?: "primary" | "secondary";
};

const EditorialText: React.FC<EditorialTextProps> = ({
  className,
  content,
  theme = "secondary",
}) => {
  const classNames = cx(
    "content",
    `content--is-${theme}`
  );
  
  
  return (
    <div
      className={`${classNames} ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default EditorialText;