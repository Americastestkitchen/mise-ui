import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { color, spacing, withThemes } from '../../../styles';

const generatePositionStyles = (positions, breakpoint) => {
  const breakpointPositions = positions[breakpoint];
  return breakpointPositions ? (
    Object.keys(breakpointPositions).map(p => `${p}: ${breakpointPositions[p]};`).join('')
  ) : '';
};

const CarouselTheme = {
  default: css`
    padding-top: ${spacing.md};
    width: 100%;

    .flickity-button {
      background: none;
      color: ${color.black};
      display: none;
      z-index: 2;

      &:hover {
        background: none;
      }

      &.next {
        right: 0;
      }

      &.previous {
        left: 0;
      }
    }

    .flickity-page-dots {
      text-align: right;

      .dot {
        border-radius: 50%;
        height: 1.2rem;
        margin: 0 ${spacing.xsm} 0 0;
        width: 1.2rem;

        &:last-of-type {
          margin-right: 0;
        }
      }
    }

    img {
      display: block;
    }

    &:not(.flickity-enabled) {
      display: flex;
      overflow: hidden;

      .slideshow & {
        .carousel-cell {
          display: flex;
          margin: 0 auto;
        }
      }
    }

    ${({ dotPosition }) => (dotPosition ? `
      .flickity-page-dots {
        ${generatePositionStyles(dotPosition, 'sm')}
      }
    ` : '')}

    ${breakpoint('md')`
      ${({ dotPosition }) => (dotPosition ? `
        .flickity-page-dots {
          ${generatePositionStyles(dotPosition, 'md')}
        }
      ` : '')}
    `}

    ${breakpoint('lg')`
      .flickity-button {
        display: block;

        &:hover {
          svg {
            transform: scale(1.2);
            opacity: 0.6;
          }
        }
      }

      ${({ dotPosition }) => (dotPosition ? `
        .flickity-page-dots {
          ${generatePositionStyles(dotPosition, 'lg')}
        }
      ` : '')}
    `}

    ${breakpoint('xlg')`
      padding-top: 2.8rem;
      width: 118rem;

      .flickity-button {
        &.next {
          right: -1rem;
        }

        &.previous {
          left: -1rem;
        }
      }

      ${({ dotPosition }) => (dotPosition ? `
        .flickity-page-dots {
          ${generatePositionStyles(dotPosition, 'xlg')}
        }
      ` : '')}
    `}
  `,
  dark: css`
    .flickity-button {
      color: ${color.white};
    }

    .flickity-page-dots {
      .dot {
        background-color: ${color.white};

        :not(.is-selected) {
          opacity: 0.5;
        }
      }
    }
  `,
  light: css`
    .flickity-button {
      color: ${color.eclipse};
    }
  `,
};

const CarouselWrapper = styled.div`
  position: relative;
`;

const CarouselEl = styled.div.attrs(props => ({
  className: [props.className, 'carousel'].join(' '),
}))`${withThemes(CarouselTheme)}`;

// IOS13 bug fix
// https://github.com/metafizzy/flickity/issues/959
// https://gist.github.com/bakura10/b0647ef412eb7757fa6f0d2c74c1f145
function temporaryCarouselFix() {
  let touchingCarousel = false;
  let touchStartCoords;

  document.body.addEventListener('touchstart', (e) => {
    touchingCarousel = Boolean(e.target.closest('.flickity-slider'));
    if (!touchingCarousel) return;

    touchStartCoords = {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY,
    };
  });

  document.body.addEventListener('touchmove', (e) => {
    if (!(touchingCarousel && e.cancelable)) return;
    const moveVector = {
      x: e.touches[0].pageX - touchStartCoords.x,
      y: e.touches[0].pageY - touchStartCoords.y,
    };
    if (Math.abs(moveVector.x) > 7) e.preventDefault();
  }, { passive: false });
}

function getFlickityInstance(el, options) {
  const {
    arrowShape,
    autoPlay = false,
    cellAlign = 'center',
    imagesLoaded,
    slideshow,
    navigationArrows,
    navigationDots,
    wrapAround,
  } = options;
  const isPhone = window.innerWidth <= 768 || window.innerHeight <= 450;
  const groupCells = slideshow ? false : '100%';
  const cOptions = {
    autoPlay,
    cellAlign,
    dragThreshold: 10,
    imagesLoaded,
    groupCells,
    prevNextButtons: navigationArrows,
    pageDots: navigationDots,
    wrapAround,
  };
  if (isPhone) {
    temporaryCarouselFix();
    cOptions.freeScroll = true;
    cOptions.freeScrollFriction = 0.085;
  } else {
    cOptions.friction = 0.7;
    cOptions.selectedAttraction = 0.08;
  }
  if (arrowShape) cOptions.arrowShape = arrowShape;
  const Flickity = require('flickity-imagesloaded'); // eslint-disable-line
  return new Flickity( // eslint-disable-line
    el,
    cOptions,
  );
}

const defaultOptions = {
  arrowShape: 'M54.48828 88.55859c2.59375 4.00782 7.78516 5.15235 11.82031 2.86329 4.03907-2.57422 5.19141-7.72657 2.88672-11.73047l-20.1875-32.04688 20.1875-32.04687c2.59375-4.00782 1.44141-9.44532-2.88672-11.73438-1.4414-.85547-2.88281-1.42969-4.61328-1.42969-2.88281 0-5.76562 1.42969-7.20703 4.00782L28.53516 47.64453l25.95312 40.91406zm0 0',
  autoPlay: false,
  cellAlign: 'left',
  imagesLoaded: true,
  navigationArrows: true,
  navigationDots: true,
  slideshow: false,
  wrapAround: true,
};

const Carousel = ({ className, dotPosition, items, options, renderItem }) => {
  const elRef = useRef(null);
  const flktyRef = useRef();
  const [enabled, setEnabled] = useState(false);
  const opts = { ...defaultOptions, ...options };
  const { slideshow } = opts;

  useEffect(() => {
    if (flktyRef.current) flktyRef.current.destroy();
    if (items.length > 1 && elRef?.current) {
      const flkty = getFlickityInstance(elRef.current, opts);
      const isEnabled = flkty.slides.length > 1;
      if (isEnabled === false) {
        flkty.destroy();
        const cells = elRef.current.querySelectorAll('.carousel-cell');
        [...cells].forEach(el => el.removeAttribute('aria-hidden'));
      } else {
        flktyRef.current = flkty;
      }
      setEnabled(isEnabled);
    }
    return () => {
      try { if (flktyRef.current) flktyRef.current.destroy(); } // eslint-disable-line
      catch (err) {}; // eslint-disable-line
    };
  }, [items, opts]);

  return (
    <CarouselWrapper
      className={[
        'carousel-wrapper',
        slideshow ? ' slideshow' : '',
        enabled ? 'flickity-enabled' : '',
      ].join(' ')}
    >
      <CarouselEl
        className={className}
        dotPosition={dotPosition}
        ref={elRef}
      >
        {items.map((item, idx) => (
          <div
            className="carousel-cell"
            key={`carousel-cell-${item.id}-${idx}`}
          >
            {renderItem(item, idx)}
          </div>
        ))}
      </CarouselEl>
    </CarouselWrapper>
  );
};

Carousel.propTypes = {
  /** Additional classname */
  className: PropTypes.string,
  /** List of items for the carousel */
  items: PropTypes.array.isRequired,
  dotPosition: PropTypes.shape({
    bottom: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    top: PropTypes.string,
  }),
  options: PropTypes.shape({
    /** Change shape of arrows on carousel */
    arrowShape: PropTypes.object,
    /** Change whether or not carousel advances to the next cell. */
    autoPlay: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.bool,
    ]),
    /** Change cell alignment inside carousel */
    cellAlign: PropTypes.string,
    /** Include prev/next navigation buttons */
    navigationArrows: PropTypes.bool,
    /** Include navigation dots */
    navigationDots: PropTypes.bool,
    /** Show one item at a time */
    slideshow: PropTypes.bool,
    /** Enables infinite scrolling in carousel */
    wrapAround: PropTypes.bool,
  }),
  /** Callback for rendering each carousel item */
  renderItem: PropTypes.func.isRequired,
};

Carousel.defaultProps = {
  className: undefined,
  dotPosition: {
    sm: {
      right: spacing.sm,
      top: '0',
    },
    md: {
      right: spacing.sm,
      top: `-${spacing.md}`,
    },
    lg: {
      right: spacing.lg,
      top: `-${spacing.md}`,
    },
    xlg: {
      right: spacing.xxlg,
      top: `-${spacing.md}`,
    },
  },
  options: {},
};

export default Carousel;
