
import { default as NextLink } from "next/link";
import { UrlObject } from "url";

import { Link, LinkProps } from "../Link/Link";

import styles from "./BlockLink.module.scss";

export interface BlockLinkProps extends Omit<LinkProps, "children"> {
  label: string,
}

export const BlockLink = ({
  className,
  label = "Inline Link",
  path = "/",
  target = "_self",
}: BlockLinkProps) => {
  return <Link
    className={`${styles['link']} ${className}`}
    path={path}
    target={target}
  >
    {label}
  </Link>
};

export default BlockLink;