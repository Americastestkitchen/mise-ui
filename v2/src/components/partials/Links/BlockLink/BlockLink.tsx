
import { default as NextLink } from "next/link";
import { UrlObject } from "url";

import styles from "./BlockLink.module.scss";

export interface BlockLinkProps {
  className?: string,
  label: string,
  path: string | (UrlObject & string),
}

export const BlockLink = ({
  className,
  label = "This is a Block Link",
  path = "/",
}: BlockLinkProps) => {
  const Link = path.startsWith('http') || path.startsWith('https')  ? "a" : NextLink;

  return <Link
    href={path}
    passHref
  >
    <a className={styles['block-link']}>
      {label}
    </a>
  </Link>
};

export default BlockLink;