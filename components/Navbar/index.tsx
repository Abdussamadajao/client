import Image from "next/image";
import React, { useState } from "react";
import { data } from "./data";
import NavLink from "./NavLink";
import { Bars, DesktopNav, MobileNav, NavContainer } from "./style";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavContainer>
      <NavLink href={"/"}>
        <Image
          src="/icons/logo.png"
          height={90}
          width={100}
          alt="navbar-logo"
        />
      </NavLink>

      <DesktopNav>
        <span>
          <NavLink href="/">Home</NavLink>
        </span>
        <span>
          <NavLink href="/team">Our Team</NavLink>
        </span>
        <span>
          <NavLink href="/service">Our Service</NavLink>
        </span>
        <span>
          <NavLink href="/about">About US</NavLink>
        </span>
        <span>
          <NavLink href="/contact">Contact Us</NavLink>
        </span>
        {/* */}
      </DesktopNav>

      <Bars onClick={() => setIsOpen((prev) => !prev)}>
        <div className={`icon-1 ${isOpen ? "a" : ""}`}></div>
        <div className={`icon-2 ${isOpen ? "c" : ""}`}></div>
        <div className={`icon-3 ${isOpen ? "b" : ""}`}></div>
        <div className="clear"></div>
      </Bars>

      <MobileNav className={isOpen ? " active" : ""}>
        <ul>
          {data.map((item, index) => {
            const { href, title } = item;

            return (
              <li key={index}>
                <NavLink
                  href={href}
                  exact
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </MobileNav>
    </NavContainer>
  );
};

export default Navbar;
