import Link from "../Links/Link/Link";

import classNames from "classnames/bind";

import styles from './byline.module.scss';

const cx = classNames.bind(styles);
export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  image: { altText: string, url: string };
  inactive?: boolean;
};

export interface BylineProps {
  className?: string;
  authors: Author[];
  theme?: "light" | "dark";
}

export default function BylineList({
  className,
  authors,
  theme = "dark",
}: BylineProps) {
  const classNames = cx(
    "authors",
    `authors--is-${theme}`,
  )
  return (
    <div className={`${classNames} ${className}`}>
      <ul className={styles["author-images"]}>
        { authors.map((author, i) => {
          const path = `${author.id}-${author.firstName}-${author.lastName}`;

          if (i <= 2) {
            return (
              <li className={styles["author-images__item"]}>
                <Link path={path}>
                  <img
                    className={styles["author-image"]}
                    alt={author.image?.altText}
                    src={author.image?.url}
                  />
                </Link>
              </li>
            )
          } else {
            return null
          }
        })}
      </ul>
      <span className={styles["author-names"]}>
      { authors.map((author, i, arr) => {
          const name = arr.length > 1
            ? author.firstName
            : `${author.firstName} ${author.lastName}`;

          const path = `${author.id}-${author.firstName}-${author.lastName}`;

          const conjunction = () => {
            if (arr.length === 1 || i === arr.length -1) {
              return 
            } else if (arr.length <= 3 && i === arr.length - 2) {
              return " and "
            } else if (arr.length > 3 && i === 2) {
              return " and others"
            } else {
              return ", "
            }
          }
          
          if (i <= 2) {
            return (
              <>
                <Link
                  className={styles["author-name"]}
                  path={path}
                >
                  {name}
                </Link>
                {conjunction()}
              </>
            )
          } else {
            return null
          }
        })}
      </span>
    </div>
  );
}