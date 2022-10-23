import Link from "next/link";
import { Button } from "./Button";

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
            <Button variant="SMALL_PRIMARY">Post a Task</Button>
          </a>
        </Link>
      </li>
    </ul>
  );
};
