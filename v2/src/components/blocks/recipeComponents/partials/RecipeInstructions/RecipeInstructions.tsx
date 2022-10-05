import React from 'react';
import styles from './recipeInstructions.module.scss';
import { InstructionList } from '../../types';
import EditorialText from '../../../../partials/EditorialText/EditorialText';


export type InstructionsPropTypes = {
  header: string;
  list: InstructionList[];
}

const RecipeInstructions = ({
  header,
  list,
}: InstructionsPropTypes) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.group}>
        <h2 className={styles.headline}>Instructions</h2>
        <EditorialText content={header} fontStyle={'accent'}></EditorialText>
      </div>
      {
        list.map((item, index: number) => {
          const { subSteps } = item
          const hasSubStep = subSteps && subSteps.length > 0
          return (
            <div className={styles.group} key={`instruction ${index}`}>
              <div className={styles.countWrapper}><span className={styles.count}>{index + 1}</span></div>
              <div className={styles.instruction}>
                <EditorialText content={item.content} fontStyle={'accent'}></EditorialText>
              </div>
              {hasSubStep && (
                subSteps.map((step, index: number) => {
                  return (
                    <div className={styles.instruction} key={`substep ${index}`} >
                      <EditorialText content={step.content} fontStyle={'accent'}></EditorialText>
                    </div>
                  )
                })
              )
              }
            </div>
          )
        })
      }
    </div>
  );
}

export default RecipeInstructions