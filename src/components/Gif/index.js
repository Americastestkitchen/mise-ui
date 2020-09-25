import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import throttle from 'lodash.throttle';
import verge from 'verge';

import { getBlankImage } from '../../lib/cloudinary';

let elements = {};
let elementCount = 0;
let isBound = false;

/**
 * NOTE: The relative/absolute positioning of the div and video used is to
 * maintain the aspect ratio of the element during the lazy-loading process.
 */
const GifContainer = styled.div.attrs(props => ({
  className: ['gif-container', props.className].join(' '),
}))`
  position: relative;

  img {
    height: 100%;
    width: 100%;
  }

  video {
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
  }
`;

const checkElementsInViewport = throttle(() => {
  elements = Object.keys(elements).reduce((newObj, id) => {
    const options = elements[id];
    if (verge.inViewport(options.element, options.cushion)) {
      if (options.callback) options.callback();
      checkUnbind(); // eslint-disable-line no-use-before-define
    } else {
      newObj[id] = options;
    }
    return newObj;
  }, {});
}, 150);

function checkBind() {
  if (!isBound && elementCount === 0 && window.addEventListener) {
    window.addEventListener('resize', checkElementsInViewport, false);
    window.addEventListener('scroll', checkElementsInViewport, false);
    window.addEventListener('touchend', checkElementsInViewport, false);
    window.addEventListener('atk-search', checkElementsInViewport, false);
    isBound = true;
  }
}

function checkUnbind() {
  if (isBound && elementCount === 0 && window.removeEventListener) {
    window.removeEventListener('resize', checkElementsInViewport, false);
    window.removeEventListener('scroll', checkElementsInViewport, false);
    window.removeEventListener('touchend', checkElementsInViewport, false);
    isBound = false;
  }
}

function addElement(id, options) {
  if (verge.inViewport(options.element, options.cushion)) {
    options.callback();
    return;
  }
  checkBind();
  elements[id] = options;
  elementCount += 1;
}

function removeElement(id) {
  delete elements[id];
  elementCount -= 1;
}

const getId = (function makeIncrement(id) {
  return function increment() {
    id += 1;
    return id;
  };
}(-1));

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
    this.handleLoad = this.handleLoad.bind(this);
    this.id = getId();
  }

  componentDidMount() {
    const { cushion, lazy } = this.props;
    if (lazy) {
      this.options = {
        callback: this.handleLoad,
        cushion,
        element: this.node,
      };
      // If the Gif is visible, load it by setting state
      // otherwise, add it to the list of element being watched
      // NOTE: setTimeout pops this action to the end of the call stack
      setTimeout(() => {
        if (verge.inViewport(this.node, cushion)) {
          this.setState({ loaded: true });
          checkBind();
        } else {
          addElement(this.id, this.options);
        }
      }, 0);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { srcSet } = this.props;
    const { loaded } = this.state;
    return (
      nextProps.srcSet !== srcSet
      || nextState.loaded !== loaded
    );
  }

  /**
   * Component updates when src changes as a result of grid/list toggle.
   * In this case, we should reset the lazy loading when necessary.
   */
  componentDidUpdate(prevProps) {
    const { lazy, srcSet } = this.props;
    if (lazy && prevProps.srcSet !== srcSet) {
      setTimeout(() => {
        removeElement(this.id);
        addElement(this.id, this.options);
      }, 0);
    }
  }

  componentWillUnmount() {
    const { lazy } = this.props;
    if (lazy) {
      removeElement(this.id);
    }
  }

  handleLoad() {
    const { srcSet } = this.props;
    if (srcSet && typeof elements[this.id] !== 'undefined') {
      this.setState({ loaded: true });
    }
  }

  renderBlankImage() {
    const { alt, aspectRatio, lazy } = this.props;
    return (
      <img
        crossOrigin="anonymous"
        className={`${lazy ? 'img-lazy ' : ''}img`}
        alt={alt}
        src={getBlankImage(aspectRatio)}
        ref={(node) => { this.node = node; }}
      />
    );
  }

  renderVideo() {
    const { alt, aspectRatio, className, srcSet } = this.props;
    return (
      <GifContainer
        className={className}
        data-testid="mise-gif"
        dangerouslySetInnerHTML={{ __html: `
          <img
            crossOrigin="anonymous"
            className="img"
            alt="${alt}"
            src="${getBlankImage(aspectRatio)}"
          />
          <video
            autoPlay
            loop
            muted
            poster="${srcSet.poster}"
          >
            <source
              type="video/mp4"
              src="${`${srcSet.mp4}.mp4`}"
            />
            <source
              type="video/webm"
              src="${`${srcSet.webm}.webm`}"
            />
          </video>
        ` }}
      />
    );
  }

  render() {
    const { lazy } = this.props;
    const { loaded } = this.state;
    return lazy && !loaded
      ? this.renderBlankImage()
      : this.renderVideo();
  }
}

Gif.propTypes = {
  /** Alt text for the Gif (Optional) */
  alt: PropTypes.string,

  /** If specified, cloudinary will be cut at the specified ratio */
  aspectRatio: PropTypes.string,

  /** css classname for image */
  className: PropTypes.string,

  /**
   * The vertical threshold (pixels) at which the Gif
   * will load when a user is scrolling down OR up on the page.
   * i.e. if the Gif is withing `cushion` pixels of being visible, it will load
   */
  cushion: PropTypes.number,

  /** Whether or not to use lazy loading */
  lazy: PropTypes.bool,

  /** Object containing urls for various video formats */
  srcSet: PropTypes.object.isRequired,
};

Gif.defaultProps = {
  alt: '',
  aspectRatio: null,
  className: null,
  cushion: 300,
  lazy: false,
};

export default Gif;
