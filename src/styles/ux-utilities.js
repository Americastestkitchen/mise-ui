import scrollToWithAnimation from 'scrollto-with-animation';

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Scroll library from espresso implemented for hash links.
 * Also handles default scroll and element focus.
 */
export function onClickHashLink(ev, safeArea = 40, durationMs = 500) {
  if (prefersReducedMotion()) { return; }

  const { target } = ev;
  if (!('href' in target)) { return; }

  const { hash } = new URL(target.href);
  if (!hash.startsWith('#')) { return; }

  const scrollTarget = document.getElementById(decodeURI(hash.slice(1)));
  if (!scrollTarget) { return; }

  scrollToWithAnimation(
    document.documentElement,
    'scrollTop',
    scrollTarget.offsetTop - safeArea,
    durationMs,
    'easeInOutCirc',
  );
}
