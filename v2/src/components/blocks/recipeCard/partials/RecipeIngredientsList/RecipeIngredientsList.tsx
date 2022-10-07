import React from 'react';
import { IngredientListPropTypes } from '../../types';
import styles from './recipeIngredientsList.module.scss';
import RecipeTable from '../RecipeTable/RecipeTable';

const RecipeIngredientsList = ({ group }: IngredientListPropTypes) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.headline}>Gather Your Ingredients</h2>
      {group.map((ingredient, index: number) => {
        const halfwayIndex = Math.ceil(ingredient.items.length / 2);
        const firstHalf = ingredient.items.slice(0, halfwayIndex);
        const secondHalf = ingredient.items.slice(halfwayIndex);
        return (
          <div key={`group ${index}`}>
            <h3 className={styles.groupName}>{ingredient.name}</h3>
            <div className={styles.ingredientGroup}>
              <div className={styles.ingredientColumn}>
                {firstHalf.map((item) => (
                  <RecipeTable key={item.name}
                    {...item} />
                ))}
              </div>
              {secondHalf.length > 0 && <div className={styles.ingredientColumn}>
                {secondHalf.map((item) => (
                  <RecipeTable key={item.name}
                    {...item} />
                ))}
              </div>}
            </div>
          </div>
        )
      })
      }
    </div>
  );
};

export default RecipeIngredientsList;