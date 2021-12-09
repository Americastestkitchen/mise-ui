import scrollToWithAnimation from 'scrollto-with-animation';

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Scroll library from espresso implemented for hash links.
 * Also handles default scroll and element focus.
 */
export function onClickHashLink(ev, safeArea = 40, durationMs = 500) {
  if (prefersReducedMotion()) { return; }
  if (!('href' in ev.currentTarget)) { return; }
  if (!(ev.currentTarget.href.startsWith('#'))) { return; }

  const url = new URL(ev.currentTarget.href);
  const scrollToId = url.hash.slice(1);
  const scrollTarget = document.getElementById(scrollToId);

  scrollToWithAnimation(
    document.documentElement,
    'scrollTop',
    scrollTarget.offsetTop - safeArea,
    durationMs,
    'easeInOutCirc',
  );
}
