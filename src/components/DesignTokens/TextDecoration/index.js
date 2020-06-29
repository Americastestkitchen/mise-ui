import React from 'react';

import TextDecorations from './svgs';

export const CircleOne = () => <TextDecorations.CircleOne />;
export const CircleTwo = () => <TextDecorations.CircleTwo />;
export const CircleThree = () => <TextDecorations.CircleThree />;
export const CircleFour = () => <TextDecorations.CircleFour />;
export const CircleFive = () => <TextDecorations.CircleFive />;
export const SquiggleOne = () => <TextDecorations.SquiggleOne />;
export const SquiggleTwo = () => <TextDecorations.SquiggleTwo />;
export const UnderlineOne = () => <TextDecorations.UnderlineOne />;
export const UnderlineTwo = () => <TextDecorations.UnderlineTwo />;

export const keyToDecoration = key => ({
  circleOne: CircleOne,
  circleTwo: CircleTwo,
  circleThree: CircleThree,
  circleFour: CircleFour,
  circleFive: CircleFive,
  squiggleOne: SquiggleOne,
  squiggleTwo: SquiggleTwo,
  underlineOne: UnderlineOne,
  underlineTwo: UnderlineTwo,
}[key] || null);

export default TextDecorations;
