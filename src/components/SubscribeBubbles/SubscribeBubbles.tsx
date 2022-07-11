import React from 'react';
import styled, { css } from 'styled-components';
import { lg } from '../../styles/breakpoints';

import logos from './logos';
import { color, font, fontSize, letterSpacing, spacing } from '../../styles';

const SubscribeBubblesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubscribeBubblesTitle = styled.h3`
  color: ${color.white};
  font: ${fontSize.md}/1 ${font.pnb};
  letter-spacing: ${letterSpacing.md};
`;

const SubscribeBubblesList = styled.ul`
   display: flex;
   padding-top: ${spacing.sm};
   overflow: scroll;

   ${lg(css`
    flex-direction: column;
    overflow: visible;
  `)}
`;

const SubscribeBubble = styled.li`
  flex-shrink: 0;
  margin-right: ${spacing.xsm};

  ${lg(css`
    margin: 0 0 ${spacing.xsm};
    width: fit-content;
  `)}

  &:last-child {
    margin: 0;
  }
`;

const SubscribeBubbleAnchor = styled.a`
  background-color: ${color.asphalt};
  border-radius: 2rem;
  color: ${color.white};
  display: flex;
  height: 5rem;
  padding: ${spacing.sm};
  transition: 0.2s all ease-in-out;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media(hover: hover) {
    &:hover {
      box-shadow: 0 3px 6px 0 ${color.transparentBlack};
      transform: translateY(-${spacing.xxsm});
    }
  }
`;

const SubscribeBubbleLogo = styled.div`
  height: 1.8rem;
  margin-right: ${spacing.xsm};
  max-height: 1.8rem;
  max-width: 1.8rem;
  width: 1.8rem;
`;

const SubscribeBubbleName = styled.span`
  color: ${color.white};
  font: ${fontSize.md}/1 ${font.pnr};
`;

type BubbleType = 'applePodcasts' | 'castbox' | 'googlePodcasts' | 'pocketCasts' | 'radioPublic' | 'spotify' | 'stitcher' | 'tuneIn';
type BubbleObject = { type: BubbleType, name: string, href: string }
export type Bubbles = BubbleObject[];
type HandleClickObject = { name: string, pathname?: string, type: BubbleType }
type HandleClick = (args: HandleClickObject) => void;

export type SubscribeBubbleProps = {
  bubbles: Bubbles;
  handleClick?: HandleClick;
  pathname?: string;
}

export default function SubscribeBubbles({
  bubbles,
  handleClick,
  pathname,
}: SubscribeBubbleProps) {
  return (
    <SubscribeBubblesWrapper className="subscribe-bubbles">
      <SubscribeBubblesTitle>
        SUBSCRIBE
      </SubscribeBubblesTitle>
      <SubscribeBubblesList>
        {
          bubbles.map(({ href, name, type }) => {
            const Logo = logos[type];
            return (
              <SubscribeBubble key={type}>
                <SubscribeBubbleAnchor
                  href={href}
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (handleClick) {
                      handleClick({ name, pathname, type });
                    }
                  }}
                  target="_blank"
                >
                  <SubscribeBubbleLogo>
                    {
                      Logo && (
                        <Logo />
                      )
                    }
                  </SubscribeBubbleLogo>
                  <SubscribeBubbleName>
                    {name}
                  </SubscribeBubbleName>
                </SubscribeBubbleAnchor>
              </SubscribeBubble>
            );
          })
        }
      </SubscribeBubblesList>
    </SubscribeBubblesWrapper>
  );
}
