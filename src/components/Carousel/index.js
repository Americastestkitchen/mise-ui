import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import { withThemes } from '../../styles';

const CarouselTheme = {
  default: css`
    width: 100%;

    img {
      display: block;
    }

    &.flickity-enabled {
      .carousel-cell:not(.is-selected) {
        opacity: 0.3;
      }
    }

    &:not(.flickity-enabled) {
      overflow: hidden;

      .slideshow & {
        .carousel-cell {
          display: flex;
          margin: 0 auto;
        }
      }
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
    cellAlign = 'center',
    slideshow,
    navigationArrows,
    navigationDots,
    wrapAround,
  } = options;
  const isPhone = window.innerWidth <= 768 || window.innerHeight <= 450;
  const groupCells = slideshow ? false : '100%';
  const cOptions = {
    cellAlign,
    dragThreshold: 10,
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
  const Flickity = require('flickity'); // eslint-disable-line
  return new Flickity( // eslint-disable-line
    el,
    cOptions,
  );
}

const defaultOptions = {
  arrowShape: { x0: 10, x1: 60, y1: 50, x2: 60, y2: 40, x3: 60 },
  cellAlign: 'center',
  navigationArrows: true,
  navigationDots: true,
  slideshow: false,
  wrapAround: false,
};

const Carousel = ({ className, items, options, renderItem }) => {
  const elRef = useRef(null);
  const flktyRef = useRef();
  const opts = { ...defaultOptions, ...options };
  const { slideshow } = opts;

  useEffect(() => {
    if (flktyRef.current) flktyRef.current.destroy();
    if (items.length > 1 && elRef?.current) {
      const flkty = getFlickityInstance(elRef.current, opts);
      if (flkty.slides.length === 1) flkty.destroy();
      else flktyRef.current = flkty;
    }
    return () => flktyRef.current?.destroy();
  }, [
    items,
    opts.cellAlign,
    opts.navigationDots,
    opts.slideshow,
    opts.wrapAround,
  ]);

  return (
    <CarouselWrapper
      className={`carousel-wrapper${slideshow ? ' slideshow' : ''}`}
    >
      <CarouselEl
        className={className}
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
  options: PropTypes.shape({
    /** Change shape of arrows on carousel */
    arrowShape: PropTypes.object,
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
  renderItem: PropTypes.func.isRequired,
};

Carousel.defaultProps = {
  className: undefined,
  options: {},
};

export default Carousel;
