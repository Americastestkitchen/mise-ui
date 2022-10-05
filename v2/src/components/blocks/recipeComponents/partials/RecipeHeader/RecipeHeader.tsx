import React from 'react';
import BylineList from '../../../../partials/Byline/Byline';
import EditorialText from '../../../../partials/EditorialText/EditorialText';
import { Author, Header, OnClick } from '../../types';
import styles from './recipeHeader.module.scss';

export type RecipePropTypes = {
  authors: Author[];
  attribution?: string;
  header: Header;
  onClick?: OnClick;
}

const RecipeHeader = ({
  authors,
  attribution,
  header,
  onClick
}: RecipePropTypes) => {
  const { yields, time, name, headnote } = header
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.headline}>{name}</h2>
      <BylineList
        authors={authors}
        attribution={attribution}
        onClick={onClick}
      ></BylineList>
      {(yields || time) &&
        <div className={styles.metaText}>
          {yields && <p><span className={styles.metaTextTitle}>Serves</span>{yields.replace(/serves([\s]?)/i, '')}</p>}
          {time && <p><span className={styles.metaTextTitle}>Time</span>{time}</p>}
        </div>
      }
      {headnote && <EditorialText content={headnote} fontStyle={'accent'}></EditorialText>}
    </div>
  );
}

export default RecipeHeader