"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <button
            type="button"
            onClick={() => setTheme("light")}
            className="text-xl hover:text-amber-500"
          >
            <MdLightMode />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setTheme("dark")}
            className="text-xl hover:text-amber-500"
          >
            <BsFillMoonFill />
          </button>
        ))}
    </>
  );
};

export default DarkModeSwitch;
