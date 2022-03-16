import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { color, spacing, withThemes } from '../../../styles';

import BookCarouselAd from '../../Ads/ReviewsAds/BookCarouselAd';

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

      .carousel-cell {
        transform: none !important;
      }

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
    freeScroll,
    initialIndex,
    imagesLoaded,
    slideshow,
    navigationArrows,
    navigationDots,
    wrapAround,
  } = options;
  const isPhone = window.innerWidth <= 768 || window.innerHeight <= 450;
  const groupCells = slideshow ? false : '100%';
  const cOptions = {
    accessibility: false,
    autoPlay,
    cellAlign,
    dragThreshold: 10,
    initialIndex,
    imagesLoaded,
    groupCells,
    prevNextButtons: navigationArrows,
    pageDots: navigationDots,
    wrapAround,
  };

  if (isPhone && freeScroll) {
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
  freeScroll: true,
  imagesLoaded: true,
  navigationArrows: true,
  navigationDots: true,
  slideshow: false,
  wrapAround: true,
};

const renderAd = key => (
  <BookCarouselAd sourceKey={key} />
);

const Carousel = ({
  adSourceKey,
  className,
  dotPosition,
  includesAdType,
  items,
  options,
  renderItem,
  onChange,
}) => {
  const elRef = useRef(null);
  const flktyRef = useRef();
  const [enabled, setEnabled] = useState(false);
  const slideshow = options.slideshow || defaultOptions.slideshow;

  /**
   * Notify dry.events of various actions
   */
  const publishEvent = useCallback((evt, data) => {
    if (typeof dry !== 'undefined') {
      // eslint-disable-next-line no-undef
      dry.events.publish(evt, data);
    }
  }, []);

  /**
   * When cell changes, trigger event
   */
  const handleCellChange = useCallback((idx) => {
    if (onChange) onChange(idx);
    const cell = flktyRef.current.cells[idx].element;
    const node = cell.cloneNode(true);
    publishEvent('flickity:change', node);
  }, [onChange, publishEvent]);

  /**
   * Handle click requests to remove a slide
   */
  const handleCellClick = useCallback((evt) => {
    const button = evt.target.closest('button');
    if (button) {
      const list = button.classList;
      if (list.contains('remove-cell')) {
        evt.preventDefault();
        if (flktyRef.current.slides.length > 1) {
          const { selectedIndex } = flktyRef.current;
          flktyRef.current.next(true);
          publishEvent('flickity:remove', { ...button.dataset, selectedIndex });
          setTimeout(() => {
            const cell = button.closest('.carousel-cell');
            if (cell) flktyRef.current.remove(cell);
          }, 500);
        } else {
          publishEvent('flickity:remove', { ...button.dataset });
          flktyRef.current.destroy();
        }
      } else if (list.contains('next-cell')) {
        flktyRef.current.next();
        publishEvent('flickity:next');
      } else if (list.contains('previous-cell')) {
        flktyRef.current.previous(true);
        publishEvent('flickity:previous');
      }
    }
  }, [publishEvent]);

  /**
   * Setup a flickity instance, register a change handler.
   * On unmount, destroy flickity instance
   */
  useEffect(() => {
    if (flktyRef.current) {
      delete elRef.current.flkty;
      flktyRef.current.destroy();
      const cells = elRef.current.querySelectorAll('.carousel-cell');
      [...cells].forEach(el => el.removeAttribute('style'));
    }
    if (items.length > 1 && elRef?.current) {
      const opts = { ...defaultOptions, ...options };
      const flkty = getFlickityInstance(elRef.current, opts);
      const isEnabled = flkty.slides.length > 1;
      if (isEnabled === false) {
        flkty.destroy();
        const cells = elRef.current.querySelectorAll('.carousel-cell');
        [...cells].forEach(el => el.removeAttribute('aria-hidden'));
      } else {
        flktyRef.current = flkty;
        flktyRef.current.on('change', handleCellChange);
        elRef.current.flkty = flktyRef.current;
        if (!opts.initialIndex) {
          // workaround for flickity 'ready' event not working
          setTimeout(() => handleCellChange(0), 0);
        }
      }
      setEnabled(isEnabled);
    }
    return () => {
      try { if (flktyRef.current) flktyRef.current.destroy(); } // eslint-disable-line
      catch (err) {}; // eslint-disable-line
    };
  }, [items, options, handleCellChange]);

  /**
   * Listen for click events on our carousel container
   */
  useEffect(() => {
    const container = elRef.current;
    container.addEventListener('click', handleCellClick);
    return () => container.removeEventListener('click', handleCellClick);
  }, [handleCellClick]);

  return (
    <CarouselWrapper
      className={[
        'carousel-wrapper',
        slideshow ? ' slideshow' : '',
        enabled ? 'flickity-enabled' : '',
      ].join(' ')}
    >
      <CarouselEl
        className={`${className} flkty-ref`}
        dotPosition={dotPosition}
        ref={elRef}
      >
        {items.map((item, idx) => (
          <div
            className="carousel-cell"
            data-idx={idx}
            key={`carousel-cell-${item.uniqueId || item.id || item.objectId}`}
          >
            {idx === 0 && includesAdType
              ? renderAd(adSourceKey)
              : renderItem(item, idx)}
          </div>
        ))}
      </CarouselEl>
    </CarouselWrapper>
  );
};

Carousel.propTypes = {
  /** SourceKey Included in Ad Link */
  adSourceKey: PropTypes.string,
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
  /** Optional prop for Ad Placement */
  includesAdType: PropTypes.oneOf(['book']),
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
  /** Callback for flickity change event */
  onChange: PropTypes.func,
};

Carousel.defaultProps = {
  adSourceKey: null,
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
  includesAdType: null,
  options: {},
  onChange: undefined,
};

export default Carousel;
