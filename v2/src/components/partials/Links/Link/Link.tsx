
import { default as NextLink } from "next/link";
import { UrlObject } from "url";

export interface LinkProps {
  className?: string,
  children: React.ReactNode,
  path: string | (UrlObject & string),
  target: "_blank" | "_self" | "_parent" | "_top",
}

export const Link = ({
  className,
  children,
  path = "/",
  target = "_self",
}: LinkProps) => {
  if (path.startsWith('/')) {
    return (
      <NextLink
        href={path}
        passHref
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={className}>
          {children}
        </a>
      </NextLink>
    )
  } else {
    return (
      <a className={className} href={path} target={target}>
        {children}
      </a>
    )
  }  
};

export default Link;