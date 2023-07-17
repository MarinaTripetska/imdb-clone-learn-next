import React from "react";
import Link from "next/link";

import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";

import { Navigation } from "@/globalTypes/navigation";
import MenuItem from "./MenuItem";

function Header() {
  return (
    <header
      className="flex justify-between items-center
     px-2 mx-auto max-w-6xl py-6"
    >
      <nav>
        <ul className="flex gap-4">
          <li>
            <MenuItem title="home" url={Navigation.home} Icon={AiFillHome} />
          </li>
          <li>
            <MenuItem
              title="about"
              url={Navigation.about}
              Icon={BsInfoCircleFill}
            />
          </li>
        </ul>
      </nav>

      <Link href={Navigation.home} className="text-2xl">
        <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
          IMDb
        </span>
        <span className="text-xl hidden  sm:inline ">Clone</span>
      </Link>
    </header>
  );
}

export default Header;
