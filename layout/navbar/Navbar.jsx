"use client";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { DiTechcrunch } from "react-icons/di";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";

import MobileNavbar from "./SidebarMobile";
import { NavbarMenu } from "./NavbarItems";
import NavbarMobile from "./NavbarMobile";

import { ThemeContext } from "@/context/themeContext";

const Navbar = () => {
  const [top, setTop] = useState("0");
  const [showMenu, setShowMenu] = useState(false);

  const { setThemeFun, theme } = useContext(ThemeContext);

  // Logic for Navbar Hide and Show on scrolling behaviour
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        setTop("0"); // Show the navbar
      } else {
        setTop("-80px"); // Hide the navbar
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      {/* Desktop Header */}
      <div
  className='w-full h-[50px] px-8 bg-[#0d1638] dark:bg-[#050d2e] backdrop-filter backdrop-blur-lg hidden md:flex justify-between items-center gap-4 shadow-sm shadow-gray-300 dark:shadow-gray-800 fixed z-10 transition-all duration-500'
  style={{ top: top }}
>
        {/* Name Logo */}
        <p className='text-gray-400 flex'>
        {/* <span className='text-[#8e34e3] dark:text-[#8e34e3] font-semibold'>Srish</span> */}

        </p>
        <div className='h-full flex gap-10'>
          {/* Navbar Links */}
          {NavbarMenu.map((navbar) => (
            <Link
              className={"text-[[#1e6fe8] dark:text-[#5f98ed] font-semibold"}
              href={navbar.link}
              key={navbar.name}
            >
              <div className='h-full pb-1 hover:pb-0 px-2 flex items-center hover:border-b-4  border-[#f7827c] dark:border-[#f7827c] transition-all'>
                {navbar.name}
              </div>
            </Link>
          ))}
        </div>
        {/* Toggle Theme button */}
        <div className='flex items-center gap-2'>
          <button
            className='text-xl text-[#8e34e3] dark:text-[#7aa7eb] hover:scale-110'
            onClick={setThemeFun}
          >
            {/* {theme === "dark" ? (
              <TbBulbFilled />
            ) : (
              <BsFillLightningChargeFill />
            )} */}
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <NavbarMobile
        setShowMenu={setShowMenu}
        setThemeFun={setThemeFun}
        showMenu={showMenu}
        theme={theme}
        top={top}
      />

      {/* SideMenu For Mobile Screen */}
      <MobileNavbar setShowMenu={setShowMenu} showMenu={showMenu} />
    </Fragment>
  );
};

export default Navbar;
