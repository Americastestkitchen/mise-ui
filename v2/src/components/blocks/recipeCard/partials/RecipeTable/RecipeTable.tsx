import React from 'react';
import { IngredientItems } from '../../types';
import styles from './recipeTable.module.scss';
import EditorialText from '../../../../partials/EditorialText/EditorialText';


const RecipeTable = ({ post, quantity, measurement, name }: IngredientItems) => {
  return (
    <div>
      <label className={styles.checkbox}>
        <input
          className={styles.checkboxInput}
          id={`ingredient-${name}`}
          name={`${name}`}
          type="checkbox"></input>
        <div className={styles.checkboxIndicator} />
        <div className={styles.textWrapper}>
          {
            quantity ? (
              <EditorialText content={quantity} fontStyle={'secondary'} />
            ) : null
          }
          <EditorialText content={`${measurement} ${name}${post}`} fontStyle={'accent'} />
        </div>
      </label>
    </div>
  )
}

export default RecipeTable;