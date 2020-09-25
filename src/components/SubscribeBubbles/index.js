import React from 'react';
import PropTypes from 'prop-types';
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

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
  margin-bottom: ${spacing.sm};
`;

const SubscribeBubblesList = styled.ul`
   display: flex;
   overflow: scroll;

   ${breakpoint('lg')`
     flex-direction: column;
     overflow: visible;
   `}
`;

const SubscribeBubble = styled.li`
  flex-shrink: 0;
  margin-right: ${spacing.xsm};

  ${breakpoint('lg')`
    margin: 0 0 ${spacing.xsm};
    width: fit-content;
  `}

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
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &:hover {
    box-shadow: 0 3px 6px 0 ${color.black};
    transform: translateY(-${spacing.xsm});
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

const SubscribeBubbles = ({ bubbles, handleClick }) => (
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
                onClick={() => handleClick({ name, type })}
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

SubscribeBubbles.propTypes = {
  bubbles: PropTypes.array.isRequired,
  handleClick: PropTypes.func,
};

SubscribeBubbles.defaultProps = {
  handleClick: () => {},
};

export default SubscribeBubbles;
