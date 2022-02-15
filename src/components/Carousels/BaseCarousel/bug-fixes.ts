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
      const newX = x > -offset ? x - thisArg.slideableWidth : x;
      const result = fnTarget.apply(thisArg, [newX, is3d]);
      return result;
    },
  };
  this.setTranslateX = new Proxy(this.setTranslateX, proxyHandler);
  this.shiftWrapCells = new Proxy(this.shiftWrapCells, proxyHandler);
}

/**
 * Left overflow items are done by adding margin to flickity-slider through css. This
 *  affects the calculation of grouping slides into arrays of cells that is used in
 *  group by navigation. This fix takes the negative left and right margins on the flickity
 *  element used in overflow and considers that in the calculation of grouping cell items.
 * https://github.com/metafizzy/flickity/blob/bd47a5e45a851eb3f8add18b7ddde7e37b140c0b/js/flickity.js#L341
 */
export function fixOverflowGroups(this: any): void {
  const proxyHandler: ProxyHandler<any> = {
    apply(_, thisArg) {
      const groupCells = thisArg.options.groupCells;
      if (!groupCells) {
        return () => false;
      }
      if (typeof groupCells === 'number') {
        const groupNumber = parseInt(`${groupCells}`, 10);
        return (i: number) => (i % groupNumber) !== 0;
      }
      const percentMatch = typeof groupCells === 'string' && groupCells.match(/^(\d+)%$/);
      const percent = percentMatch ? parseInt(percentMatch[1], 10) / 100 : 1;
      return (_: any, slideWidth: any) => {
        const { innerWidth, marginLeft, marginRight } = thisArg.size;
        const innerWidthUnderHeader = innerWidth + marginLeft + marginRight;
        return slideWidth <= (innerWidthUnderHeader + 1) * percent;
      };
    },
  };
  this._getCanCellFit = new Proxy(this._getCanCellFit, proxyHandler);
}
