import Link from "next/link";
import { SmallButton } from "./Button";

export const NavMenu = () => {
  return (
    <ul className="inline-flex gap-12 items-center">
      <li>
        <Link href="/">
          <a className="align-middle">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a className="align-middle">Login</a>
        </Link>
      </li>
      <li>
        <Link href="/signup">
          <a className="align-middle">
            <SmallButton>Post a Task</SmallButton>
          </a>
        </Link>
      </li>
    </ul>
  );
};
