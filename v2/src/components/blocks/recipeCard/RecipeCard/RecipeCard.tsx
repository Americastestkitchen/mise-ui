import React from 'react';
import styles from './recipeCard.module.scss';
import { RecipeHeaderPropTypes, IngredientListPropTypes, InstructionsPropTypes } from '../types';
import RecipeHeader from '../partials/RecipeHeader/RecipeHeader';
import RecipeIngredientsList from '../partials/RecipeIngredientsList/RecipeIngredientsList';
import RecipeInstructions from '../partials/RecipeInstructions/RecipeInstructions';


export type RecipeCardProps = {
  header: RecipeHeaderPropTypes,
  ingredients: IngredientListPropTypes,
  instructions: InstructionsPropTypes,
}

const RecipeCard = ({
  header,
  ingredients,
  instructions
}: RecipeCardProps) => {
  return (
    <div className={styles.wrapper}>
      <RecipeHeader authors={header.authors} header={header.header} onClick={header.onClick}/>
      <RecipeIngredientsList group={ingredients.group} />
      <RecipeInstructions header={instructions.header} list={instructions.list} />
    </div>
  );
}

export default RecipeCard