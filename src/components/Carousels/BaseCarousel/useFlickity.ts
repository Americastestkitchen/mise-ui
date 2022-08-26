// flickity.d.ts and inferred types are outdated with methods required in utility methods
/* eslint-disable @typescript-eslint/no-explicit-any */
import Flickity from 'flickity';
import React, { useCallback, useState, useEffect, useRef, MutableRefObject, Dispatch, SetStateAction } from 'react';
import useResizeObserver from 'use-resize-observer/polyfilled';
import { ResizeObserver } from '@juggle/resize-observer';
import { fixIosScrollBehavior, fixLeftOverflow, fixOverflowGroups } from './bug-fixes';

/**
 * Allow for slight overflow related to margin on the last slide.
 * @param flkty Flickity instance
 * @returns Boolean if all slides are visible
 */
function isAllSlidesVisible(flkty: any): boolean {
  const slideableWidth = flkty?.slideableWidth;
  const availableWidth = flkty?.size?.innerWidth;
  const overflowPercent = (slideableWidth - availableWidth) / slideableWidth;
  return (availableWidth >= slideableWidth) || (overflowPercent <= 0.05);
}

/**
 * If carousel viewport is larger than area to slide, there
 *  is a bunch of weird ui rendering bugs. Therefore interaction
 *  is disabled
 * @param flkty flickity instance
 */
function disableFlickity(flkty: any): void {
  flkty.options.wrapAround = false;
  flkty.options.draggable = false;
  flkty.updateDraggable();
  flkty.select(0);
}

/**
 * Inverse of disableFlickity. Enables the disabled options.
 * @param flkty flickity instance
 */
function enableFlickity(flkty: any): void {
  flkty.options.wrapAround = true;
  flkty.options.draggable = true;
  flkty.updateDraggable();
}

/**
 * Watch changes in width of container to run checks for
 *  if slide features should be disabled to avoid flickity
 *  related bugs for sliding with not enough items. Only
 *  applicable for carousels not using groups.
 */
function useResizeFlickity(
  flickity: MutableRefObject<Flickity | null>,
  setHideButtons: Dispatch<SetStateAction<boolean>>,
  width: number | undefined,
) {
  useEffect(() => {
    if (flickity.current) {
      const allSlidesVisible = isAllSlidesVisible(flickity.current);
      if (allSlidesVisible) {
        disableFlickity(flickity.current);
        setHideButtons(true);
      } else {
        enableFlickity(flickity.current);
        setHideButtons(false);
      }
      flickity.current.resize();
    }
  }, [flickity, setHideButtons, width]);
}

/**
 * Callback ref to initialize flickity on an element
 */
function useFlickityCallbackRef(flickity: MutableRefObject<Flickity | null>) {
  return useCallback((elem: any) => {
    if (!elem) {
      return;
    }

    const Flickity = require('flickity'); // eslint-disable-line
    const flkty = new Flickity(elem, {
      imagesLoaded: true,
      wrapAround: true,
      cellAlign: 'left',
      pageDots: false,
      prevNextButtons: false,
      friction: 0.7,
      selectedAttraction: 0.08,
      accessibility: false,
      on: {
        // eslint-disable-next-line object-shorthand, func-names
        ready: function (this: Flickity) {
          fixIosScrollBehavior.call(this);
          fixLeftOverflow.call(this);
          fixOverflowGroups.call(this);
        },
      },
    });

    flickity.current = flkty;

    const resizeObserver = new ResizeObserver(() => {
      if (flkty) {
        flkty.resize();
      }
    });

    resizeObserver.observe(elem);
  }, [flickity]);
}

export type FlickityState = {
  /** resize observer ref, pass to outer most element in carousel for sizing changes. */
  ref: (instance: HTMLElement | null) => void,
  /** react ref to flickity instance, used for calls like .resize() */
  flickity: React.MutableRefObject<Flickity | null>,
  /** callback ref to initialize carousel, elem is passed to new Flickity(elem, options) */
  flickityRef: (elem: any) => void,
  /**
   * Exposed state for when flickity behaviors are disabled.
   * Used on navigation buttons that are ouside of prevNextButtons option.
   */
  hideButtons: boolean,
}

/** Hook to manage flickity instance. */
export default function useFlickity(): FlickityState {
  const { ref, width } = useResizeObserver();
  const flickity = useRef<Flickity | null>(null);
  const [hideButtons, setHideButtons] = useState<boolean>(false);
  const flickityRef = useFlickityCallbackRef(flickity);
  useResizeFlickity(flickity, setHideButtons, width);
  return { ref, flickity, flickityRef, hideButtons };
}

/**
 * Callback ref to initialize flickity on an element
 */
function useFlickityCallbackRefGroup(flickity: MutableRefObject<Flickity | null>) {
  return useCallback((elem: any) => {
    if (!elem) {
      return;
    }

    const Flickity = require('flickity'); // eslint-disable-line
    const flkty = new Flickity(elem, {
      imagesLoaded: true,
      wrapAround: true,
      cellAlign: 'left',
      groupCells: true,
      pageDots: false,
      prevNextButtons: false,
      friction: 0.7,
      selectedAttraction: 0.08,
      accessibility: false,
      on: {
        // eslint-disable-next-line object-shorthand, func-names
        ready: function (this: Flickity) {
          fixIosScrollBehavior.call(this);
          fixLeftOverflow.call(this);
          fixOverflowGroups.call(this);
        },
      },
    });

    flickity.current = flkty;

    const resizeObserver = new ResizeObserver(() => {
      if (flkty) {
        flkty.resize();
      }
    });

    resizeObserver.observe(elem);
  }, [flickity]);
}

/** Hook to manage flickity instance. */
export function useFlickityGroup(): FlickityState {
  const { ref, width } = useResizeObserver();
  const flickity = useRef<Flickity | null>(null);
  const [hideButtons, setHideButtons] = useState<boolean>(false);
  const flickityRef = useFlickityCallbackRefGroup(flickity);
  useResizeFlickity(flickity, setHideButtons, width);
  return { ref, flickity, flickityRef, hideButtons };
}
