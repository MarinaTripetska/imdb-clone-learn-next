import React from "react";
import NavbarItem from "./NavbarItem";
import { FetchGenre } from "@/globalTypes/fetchGenre";

const Navbar = () => {
  return (
    <nav className="p-4 dark:bg-gray-600 bg-amber-100 lg:text-lg">
      <ul className="flex justify-center gap-4 ">
        <li>
          <NavbarItem title="Trending" param={FetchGenre.trending} />
        </li>
        <li>
          <NavbarItem title="Top Rated" param={FetchGenre.topRated} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
