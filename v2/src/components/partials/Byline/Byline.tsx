import React, { useState } from 'react';
import styles from './byline.module.scss';
import cx from 'classnames';

export type OnClick = (id: number, name: string) => void;

export type Author = {
  id?: number;
  firstName: string;
  lastName: string;
  image?: { altText?: string, cloudinaryUrl: string };
  inactive?: boolean;
};
export interface ByLineListProps {
  authors: Author[];
  attribution?: string;
  onClick?: OnClick
}

type AuthorListInnerProps = { authors: Author[], onClick?: OnClick };

const AuthorListInner = ({ authors, onClick }: AuthorListInnerProps) => {
  const fullNames = authors.map(
    (author, idx) => {
      const { firstName, lastName, id: authorId } = author
      if (!!onClick && !author?.inactive && authorId !== undefined) {
        return (
          <a
            href={`/authors/${authorId}-${firstName}-${lastName}`}
            className={styles.author}
            aria-label={`${firstName} ${lastName}: Go to author page`}
            key={authorId}
            onClick={(e) => {
              e.preventDefault();
              onClick(authorId, `${firstName.toLowerCase()}-${lastName.toLowerCase()}`)
            }
            }
          >
            {firstName} {lastName}
          </a>
        );
      }
      return <span className={styles.author} key={authorId || idx}>{firstName} {lastName}</span>;
    },
  );
  switch (fullNames.length) {
    case 0: return <></>;
    case 1: return <span className={styles.author} >{fullNames[0]}</span>;
    case 2: return <span className={styles.author} >{fullNames[0]} and {fullNames[1]}</span>;
    default: {
      const firstPart = fullNames.slice(0, -1).reduce((acc, item) => [...acc, item, ', '], [] as (string | JSX.Element)[]);
      return <span className={styles.author} >{firstPart}and {fullNames.slice(-1)}</span>;
    }
  }
};
export default function BylineList({
  authors,
  attribution,
  onClick
}: ByLineListProps) {
  const shouldRenderImage = authors.length === 1 && authors[0]?.image?.cloudinaryUrl
  const atLeastOneAuthor = authors?.length > 0
  const [imageError, setImageError] = useState(false);
  const classStyles = cx(
    styles.attribution,
    { [styles.atLeastOneAuthor]: atLeastOneAuthor },
  )
  return (
    <div className={styles.wrapper}>
      <div className={styles.authorWrapper}>
        {shouldRenderImage && !imageError &&
          <div
            className={styles.headShotWrapper}
            data-testid="person-head-shot"
          >
            <img
              className={styles.headShot}
              crossOrigin="anonymous"
              decoding="async"
              alt={authors[0].image?.altText}
              src={authors[0].image?.cloudinaryUrl}
              onError={() => { setImageError(true); }}
            />
          </div>
        }
        <AuthorListInner authors={authors} onClick={onClick} />
      </div>
      {attribution &&
        <div className={classStyles}>
          {attribution}
        </div>
      }
    </div>
  );
}