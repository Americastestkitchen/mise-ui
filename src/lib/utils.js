import scrollToWithAnimation from 'scrollto-with-animation';

const utils = {
  loadScriptFile(url, async = true, defer = false, location = 'head') {
    if (!url) return;
    const gads = document.createElement('script');
    if (async) gads.async = async;
    if (defer) gads.defer = defer;
    gads.referrerPolicy = 'strict-origin';
    gads.type = 'text/javascript';
    const useSSL = document.location.protocol === 'https:';
    const protocol = useSSL ? 'https:' : 'http:';
    const { location: { hostname } } = document;
    const needsHostname = /.com|.net|.io/.test(url) === false;
    const startsWithSlashes = url.indexOf('//') === 0;
    gads.src = `${protocol}${startsWithSlashes ? '' : '//'}${needsHostname ? hostname : ''}${url}`;
    if (location === 'head') {
      const node = document.getElementsByTagName('script')[0];
      if (node) node.parentNode.insertBefore(gads, node);
    } else {
      document.body.appendChild(gads);
    }
  },
  loadCssFile(url) {
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.media = 'screen';
    link.href = url;
    const headScript = document.querySelector('script');
    headScript.parentNode.insertBefore(link, headScript);
  },
  scrollTo(yPos, duration = 250) {
    // browser compatibility - some use documentElement, some body
    [document.documentElement, document.body].forEach((el) => {
      scrollToWithAnimation(el, 'scrollTop', yPos, duration, 'easeInOutCirc');
    });
  },
  getPosition(el) {
    const rect = el.getBoundingClientRect();
    const win = el.ownerDocument.defaultView;

    return {
      top: parseInt(rect.top + win.pageYOffset, 10),
      left: parseInt(rect.left + win.pageXOffset, 10),
    };
  },
  scrollToElement(elementId, topMargin = 40, duration = 250) {
    let el;
    if (typeof elementId === 'string') {
      el = document.querySelector(`#${elementId}`);
    }
    if (el) {
      let pos = this.getPosition(el).top - topMargin;
      if (pos < 100) pos = 0;
      this.scrollTo(pos, duration);
    }
  },
};

export default utils;
