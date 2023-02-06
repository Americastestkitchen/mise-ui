import React, { HTMLProps, PropsWithChildren } from 'react';

type Props = PropsWithChildren<Omit<HTMLProps<HTMLAnchorElement>, 'style'>> & { showAnchor: boolean; displayBlock?: boolean }

export default function ConditionalAnchor({
  showAnchor,
  displayBlock = false,
  children,
  ...props
}: Props) {
  if (showAnchor) {
    return <a {...props} style={{ display: displayBlock ? 'block' : 'contents' }}>{children}</a>;
  }

  return <>{children}</>;
}
