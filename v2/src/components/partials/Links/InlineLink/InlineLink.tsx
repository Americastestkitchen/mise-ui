
import { default as NextLink } from "next/link";
import { UrlObject } from "url";

import styles from "./InlineLink.module.scss";

export interface InlineLinkProps {
  className?: string,
  label: string,
  path: string | (UrlObject & string),
}

export const InlineLink = ({
  className,
  label = "This is an Inline Link",
  path = "/",
}: InlineLinkProps) => {
  const Link = path.startsWith('http') || path.startsWith('https')  ? "a" : NextLink;

  return <Link
    href={path}
    passHref
  >
    <a className={styles['inline-link']}>
      {label}
    </a>
  </Link>
};

export default InlineLink;