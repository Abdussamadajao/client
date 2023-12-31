import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

type NavLinkProps = {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
};

function NavLink({
  href,
  exact = false,
  children,
  ...props
}: NavLinkProps & React.LinkHTMLAttributes<HTMLAnchorElement>) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += " active";
  }

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}

export default NavLink;
