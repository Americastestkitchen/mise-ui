import React from 'react';

import CircledText from './components/CircledText';
import TextDecorations from './svgs';
import UnderlinedText from './components/UnderlinedText';

export const CircleOne = () => <TextDecorations.CircleOne />;
export const CircleTwo = () => <TextDecorations.CircleTwo />;
export const CircleThree = () => <TextDecorations.CircleThree />;
export const CircleFour = () => <TextDecorations.CircleFour />;
export const CircleFive = () => <TextDecorations.CircleFive />;
export const SquiggleOne = () => <TextDecorations.SquiggleOne />;
export const SquiggleTwo = () => <TextDecorations.SquiggleTwo />;
export const UnderlineOne = () => <TextDecorations.UnderlineOne />;
export const UnderlineTwo = () => <TextDecorations.UnderlineTwo />;
export const UnderlineThree = () => <TextDecorations.UnderlineThree />;

export {
  CircledText,
  UnderlinedText,
};

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
  underlineThree: UnderlineThree,
}[key] || null);

export default TextDecorations;
