import Link from "next/link";

import { LayoutContainer } from "./LayoutContainer";

const NavMenu = () => {
  return (
    <ul className="inline-flex gap-6">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </li>
      <li>
        <Link href="/signup">
          <a>Sign up</a>
        </Link>
      </li>
    </ul>
  );
};

export const Header = () => {
  return (
    <header className="p-4">
      <LayoutContainer className="flex justify-between">
        <span className="text-xl font-medium">
          <Link href="/">
            <a>marketplace</a>
          </Link>
        </span>
        <NavMenu />
      </LayoutContainer>
    </header>
  );
};
