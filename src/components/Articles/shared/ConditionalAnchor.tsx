import React, { HTMLProps, PropsWithChildren } from 'react';

type Props = PropsWithChildren<Omit<HTMLProps<HTMLAnchorElement>, 'style'>> & { showAnchor: boolean }

export default function ConditionalAnchor({
  showAnchor,
  children,
  ...props
}: Props) {
  if (showAnchor) {
    return <a {...props} style={{ display: 'contents' }}>{children}</a>;
  }

  return <>{children}</>;
}
