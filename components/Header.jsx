"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { navData } from "@/app/constant/data";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const isTop = window.scrollY < 30;
    const header = document.querySelector(".sticky-header");

    if (isTop) {
      header.classList.remove("scrolled");
    } else {
      header.classList.add("scrolled");
    }
  };

  if (typeof window !== "undefined") {
    // Check if window is defined (to avoid issues during server-side rendering)
    window.addEventListener("scroll", handleScroll);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <header className="sticky-header padding-container max-container  flex gap-4 justify-between items-center py-1">
      <Link href="/">
        <div className="logoContainer">
          <Image
            src="/dashLogo.png"
            alt="logo"
            width={120}
            height={30}
            className="logoImage"
          />
        </div>
      </Link>
      {/* Mobile menu toggle */}
      <div className="lg:hidden">
        <FiMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full bg-black bg-opacity-50 z-50 transition-all duration-500 ${
          isMenuOpen ? "w-3/4" : "w-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="bg-tertiary border-l-2 border-white w-full h-full flex flex-col justify-start p-4">
          <IoCloseOutline
            className="text-3xl my-4 cursor-pointer"
            onClick={toggleMenu}
          />
          <ul className="mt-8 text-center">
            {navData.map((link, index) => (
              <li key={index} className="my-8">
                <Link href={link.path}>
                  <p className="text-xl text-white font-medium hover:text-secondary">
                    {link.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Regular menu for larger screens */}
      <ul className="hidden lg:inline-flex p-2 group relative">
        {navData.map((link, index) => (
          <Link key={index} href={link.path} className="gap-2">
            <div
              className={`${
                link.path === pathname &&
                "underline decoration-secondary underline-offset-8"
              } text-white  hover:text-secondary uppercase text-[16px] px-4 py-2 font-semibold`}
            >
              {link.name}
            </div>
          </Link>
        ))}
      </ul>

      <Link
        href="/contact"
        className="hidden lg:flex h-12 px-2 rounded-full justify-center items-center gap-2 font-semibold btn_dark_rounded"
      >
        <span className="">Contact Me</span>
        <span className="h-5 w-5 rounded-full flexCenter">
          <HiArrowRight />
        </span>
      </Link>
    </header>
  );
};

export default Header;
