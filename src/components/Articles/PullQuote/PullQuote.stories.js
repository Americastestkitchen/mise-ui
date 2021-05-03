import React from 'react';

import PullQuote from './index';

export default {
  title: 'Components|Articles/PullQuote',
  component: PullQuote,
};

export const DefaultWithAttribution = () => (
  <PullQuote
    attribution="First Last"
    quote="All blue cheeses are made with the same species of mold, Penicillium roqueforti."
  />
);

export const DefaultWithoutAttribution = () => (
  <PullQuote
    quote="All blue cheeses are made with the same species of mold, Penicillium roqueforti."
  />
);

export const DefaultWithoutIcon = () => (
  <PullQuote
    attribution="First Last"
    includeIcon={false}
    quote="All blue cheeses are made with the same species of mold, Penicillium roqueforti."
  />
);

export const WideWithAttribution = () => (
  <PullQuote
    attribution="First Last"
    quote="All blue cheeses are made with the same species of mold, Penicillium roqueforti."
    width="wide"
  />
);

export const WideWithoutAttribution = () => (
  <PullQuote
    quote="All blue cheeses are made with the same species of mold, Penicillium roqueforti."
    width="wide"
  />
);

export const WideWithoutIcon = () => (
  <PullQuote
    attribution="First Last"
    includeIcon={false}
    quote="All blue cheeses are made with the same species of mold, Penicillium roqueforti."
    width="wide"
  />
);
