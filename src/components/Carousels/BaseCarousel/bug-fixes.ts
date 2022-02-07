// flickity.d.ts and inferred types are outdated with methods required in utility methods
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * v2.3.0 might have patched issue
 * https://github.com/metafizzy/flickity/releases/tag/v2.3.0
 */
export function fixIosScrollBehavior(this: Flickity): void {
  this.on('dragStart', () => {
    document.ontouchmove = e => e.preventDefault();
  });
  this.on('dragEnd', () => {
    document.ontouchmove = () => true;
  });
}

/**
 * Left overflow items dissapear when positionSlider sets the translateX of the
 *  carousel between 0 and values where the last carousel item should be visible.
 * In order to fix this we proxy the calls that reset the offset to 0 so that flickity
 *  thinks it can't yet move items left of the selected cell to the end.
 * https://github.com/metafizzy/flickity/blob/fb96a2400f2349b624f098cab6869ba53c0c5c18/js/animate.js#L127
 */
export function fixLeftOverflow(this: any): void {
  const proxyHandler: ProxyHandler<any> = {
    apply(fnTarget, thisArg, [x, is3d]) {
      // TODO: needs better utility for changing this value.
      const offset = thisArg.options.offset ?? 100;
      const newX = x > -offset && thisArg.options.wrapAround ? x - thisArg.slideableWidth : x;
      const result = fnTarget.apply(thisArg, [newX, is3d]);
      return result;
    },
  };
  this.setTranslateX = new Proxy(this.setTranslateX, proxyHandler);
  this.shiftWrapCells = new Proxy(this.shiftWrapCells, proxyHandler);
}
