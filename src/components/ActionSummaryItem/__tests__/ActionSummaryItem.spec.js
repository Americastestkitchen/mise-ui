import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import ActionSummaryItem from '../index';

describe('ActionSummaryItem component', () => {
  const renderComponent = props => (
    render(
      <ActionSummaryItem {...props} />,
    )
  );

  it('render a rating', () => {
    renderComponent({
      children: <><strong>4.6</strong>&nbsp;<span>(36 ratings)</span></>,
      icon: 'star',
      label: 'Star rating',
    });
    expect(screen.getByText('(36 ratings)'));
    expect(screen.getByLabelText('Star rating'));
  });

  it('render a comment', () => {
    renderComponent({
      children: <span>12 comments</span>,
      icon: 'comment',
      label: 'Comment count',
    });
    expect(screen.getByText('12 comments'));
    expect(screen.getByLabelText('Comment count'));
  });
});
