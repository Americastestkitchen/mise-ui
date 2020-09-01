import React from 'react';
import { create } from 'react-test-renderer';

import Badge from '../index';

describe('components', () => {
  it('renders an atk badge', () => {
    const atkBadge = create(<Badge type="atk" />).toJSON();
    expect(atkBadge).toMatchSnapshot();
  });

  it('renders a cio badge', () => {
    const cioBadge = create(<Badge type="cio" />).toJSON();
    expect(cioBadge).toMatchSnapshot();
  });

  it('renders a cco badge', () => {
    const ccoBadge = create(<Badge type="cco" />).toJSON();
    expect(ccoBadge).toMatchSnapshot();
  });

  it('renders a kids badge', () => {
    const kidsBadge = create(<Badge type="kids" />).toJSON();
    expect(kidsBadge).toMatchSnapshot();
  });
});
