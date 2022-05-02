import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg<{ stroke?: string }>`
  margin-left: 5px;
  fill: none;
  stroke-linecap: round;
  stroke-miterlimit: 10;
`;

export type ChevronThinProps = { stroke?: string; className?: string; };

export default function ChevronThin({
  className,
  stroke = 'inherit',
}: ChevronThinProps) {
  return (
    <Svg
      className={className}
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
      width="4.279"
      height="10.978"
      viewBox="0 0 4.279 10.978"
      aria-hidden="true"
      focusable="false"
      role="img"
    >
      <path d="m0 0 3 4.8-3 4.8" transform="translate(.689 .689)" />
    </Svg>
  );
}
