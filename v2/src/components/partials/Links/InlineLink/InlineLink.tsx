
import { default as NextLink } from "next/link";
import { UrlObject } from "url";

import { Link, LinkProps } from "../Link/Link";

import styles from "./InlineLink.module.scss";

export interface InlineLinkProps extends Omit<LinkProps, "children"> {
  label: string,
}

export const InlineLink = ({
  className,
  label = "Inline Link",
  path = "/",
  target = "_self",
}: InlineLinkProps) => {
  return <Link
    className={`${styles['link']} ${className}`}
    path={path}
    target={target}
  >
    {label}
  </Link>
};

export default InlineLink;