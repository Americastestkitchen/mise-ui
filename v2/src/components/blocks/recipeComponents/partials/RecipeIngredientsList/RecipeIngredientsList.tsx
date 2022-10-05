import React from 'react';
import { Group } from '../../types';
import styles from './recipeIngredientsList.module.scss';
import RecipeTable from '../RecipeTable/RecipeTable';

type IngredientTable = {
  ingredientsList: Group[]
};

const RecipeIngredientsList = ({ ingredientsList }: IngredientTable) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.headline}>Gather Your Ingredients</h2>
      {ingredientsList.map((group, index: number) => {
        const halfwayIndex = Math.ceil(group.items.length / 2);
        const firstHalf = group.items.slice(0, halfwayIndex);
        const secondHalf = group.items.slice(halfwayIndex);
        return (
          <div key={`group ${index}`}>
            <h3 className={styles.groupName}>{group.name}</h3>
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