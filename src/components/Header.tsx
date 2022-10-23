import Link from "next/link";
import { joinClassNames } from "../utils";

import { LayoutContainer } from "./LayoutContainer";
import { NavMenu } from "./NavMenu";

export const Header = () => {
  return (
    <header className="p-4">
      <LayoutContainer className="flex justify-between items-center">
        <span className="text-xl font-medium align-middle">
          <Link href="/">
            <a className="align-middle">marketplace</a>
          </Link>
        </span>
        <NavMenu />
      </LayoutContainer>
    </header>
  );
};
