import { useState } from "react";
import Link from "next/link";
import { HamburgerMenu } from "./HamburgerMenu";

import { LayoutContainer } from "./LayoutContainer";
import { NavMenu } from "./NavMenu";

export const Header = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  return (
    <header className="p-4">
      <LayoutContainer className="flex justify-between items-center">
        <span className="text-xl font-medium align-middle">
          <Link href="/">
            <a className="align-middle">marketplace</a>
          </Link>
        </span>
        <HamburgerMenu
          className="md:hidden"
          active={hamburgerActive}
          toggleActive={() => setHamburgerActive(!hamburgerActive)}
        />
        <NavMenu
          active={hamburgerActive}
          closeMenu={() => setHamburgerActive(false)}
        />
      </LayoutContainer>
    </header>
  );
};
